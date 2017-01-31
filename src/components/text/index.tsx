import './styles.css'
import * as createElement from 'inferno-create-element'
import * as Component from 'inferno-component'
import wrap from '../wrap'
import Container from '../container'

export const Title = wrap('div', 'title', {}, 'large', 'xl', 'bold', 'heavy', 'capitalize')
export const Paragraph = wrap('div', 'paragraph', {}, 'large', 'bold', 'highlight', 'space', 'capitalize')
export const Spacer = wrap(Container, 'spacer', {}, 'small', 'large', 'xl', 'xs')
