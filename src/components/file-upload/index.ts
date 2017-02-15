import Delta from "../../data/delta";

export default class FileUpload {
	private _input: HTMLInputElement
	private _resolve = undefined
	private _reject = undefined

	constructor(delta: Delta) {
		const reader = new FileReader()
		reader.onload = async () => {
			document.body.removeChild(this._input)
			const [prefix, data] = reader.result.split(',')
			const mime: string = prefix.match(/:(.+);/)[1]
			// const [category, _] = mime.split('/')
			await delta.send('upload.start', {})
			for (let part of data.match(/.{1,10000}/g)) {
				await delta.send('upload.partial', {
					data: part,
				})
			}
			const result = await delta.send('upload.finish', {
				mime: mime,
			})
			this._resolve(result)
		}

		this._input = document.createElement('input')
		this._input.type = 'file'
		this._input.style.display = 'none'
		this._input.onchange = e => {
			reader.readAsDataURL(this._input.files[0])
		}
		document.body.appendChild(this._input)
	}
	public upload() {
		return new Promise((a, b) => {
			this._resolve = a
			this._reject = b
			this._input.click()
		})
	}
}
