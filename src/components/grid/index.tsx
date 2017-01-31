import './styles.css'
import * as createElement from 'inferno-create-element'
import * as Component from 'inferno-component'
import wrap from '../wrap'
import Container from '../container'

interface IProps {
	children: any
}

interface IState {

}

export default class Grid extends Component<any, IState> {
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
