import './styles.css'
import createElement from 'inferno-create-element'
import wrap from '../wrap'

export const Input = wrap('input', 'form-input', {})
export const TextArea = wrap('textarea', 'form-input', {})
export const Select = wrap('select', 'form-input form-select', {})
