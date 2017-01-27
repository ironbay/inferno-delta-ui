import './styles.css'
import * as createElement from 'inferno-create-element'
import * as Component from 'inferno-component'
import { Link } from 'inferno-router'
import wrap from '../wrap'
import Container from '../container'

export default wrap(Link, 'button', {}, 'border', 'transparent', 'shrink')
