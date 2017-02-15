import './styles.css'
import createElement from 'inferno-create-element'
import wrap from '../wrap'
import { Container, Wrap } from '../container'
import { Title } from '../text'

export const Form = wrap(Container, 'form', {
	column: true,
})
export const Input = wrap('input', 'input', {})
export const TextArea = wrap('textarea', 'input', {})
export const Select = wrap('select', 'input select', {})
export const Label = wrap(Title, 'form-label', {
	uppercase: true,
	small: true,
	bold: true,
})

const YEARS = []
for (let x = new Date().getFullYear(); x >= 1970; x--) {
	YEARS.push(x)
}

export function YearSelect({ defaultValue, ...rest}) {
	return (
		<Select {...rest} >
			{
				['Current', ...YEARS].map(item => <option selected={item.toString() === defaultValue} value={item}>{item}</option>)
			}
		</Select>
	)
}
