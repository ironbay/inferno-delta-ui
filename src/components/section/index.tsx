import './styles.css'
import * as createElement from 'inferno-create-element'
import * as Component from 'inferno-component'
import wrap from '../wrap'
import Container from '../container'

export default wrap(Container, 'section', {}, 'white', 'large', 'xl', 'small', 'edges')
