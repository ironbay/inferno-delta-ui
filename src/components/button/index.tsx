import './styles.css'
import createElement from 'inferno-create-element'
import { Link } from 'inferno-router'
import wrap from '../wrap'

export default wrap(Link, 'button', {}, 'border', 'transparent', 'shrink', 'small', 'dark', 'white')
