import './styles.css'
import createElement from 'inferno-create-element'
import Component from 'inferno-component'
import wrap from '../wrap'
import { Container, Wrap } from '../container'


export default class Grid extends Component<any, any> {
	constructor() {
		super()
	}
	render() {
		const children =
			[].concat(this.props.children).map(item => {
				return (
					<Container className='grid-item'>
					{item}
					</Container>
				)
			})
		return render({
			...this.props,
			children,
		})
	}

}

const render = wrap(Container, 'grid', {}, 'grid', 'two', 'three')
