import './styles.css'
import * as createElement from 'inferno-create-element'
import * as Component from 'inferno-component'
import wrap from '../wrap'
import Container from '../container'

export const Title = wrap(Container, 'title', {}, 'large', 'xl', 'bold', 'heavy')
export const Paragraph = wrap(Container, 'paragraph', {})
export const Spacer = wrap(Container, 'spacer', {}, 'small', 'large', 'xl', 'xs')
