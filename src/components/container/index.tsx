import './styles.css'
import * as createElement from 'inferno-create-element'
import * as Component from 'inferno-component'
import wrap from '../wrap'

interface IProps {
}

interface IState {

}

export default class Container extends Component<any, IState> {
	constructor() {
		super()
	}
	render() {
		return wrap('div', 'container', {},
			'column',
			'justify-center',
			'justify-between',
			'align-center',
			'grow',
			'equal',
			'hide-mobile',
		)(this.props)
	}
	static Wrap = wrap(Container, 'container-wrap', {})

}
