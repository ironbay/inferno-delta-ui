import './styles.css'
import * as createElement from 'inferno-create-element'
import * as Component from 'inferno-component'
import Container from '../container'
import { Title } from '../text'
import Button from '../button'

interface IProps {
	children
}

interface IState {

}

export default class Header extends Component<IProps, IState> {
	constructor() {
		super()
	}
	render() {
		return (
			<Container justify-center align-center grow className='header'>
				{this.props.children}
			</Container>
		)
	}
}
