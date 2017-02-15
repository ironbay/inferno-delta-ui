import './styles.css'
import createElement from 'inferno-create-element'
import wrap from '../wrap'
import { Container, Wrap } from '../container'

export default wrap(Container, 'timeline', {
	column: true
})
