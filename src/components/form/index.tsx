import './styles.css'
import * as createElement from 'inferno-create-element'
import * as Component from 'inferno-component'
import wrap from '../wrap'
import Container from '../container'

export const Input = wrap('input', 'form-input', {})
export const TextArea = wrap('textarea', 'form-input', {})
export const Select = wrap('select', 'form-input form-select', {})
