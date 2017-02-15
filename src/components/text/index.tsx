import './styles.css'
import createElement from 'inferno-create-element'
import wrap from '../wrap'
import { Container, Wrap } from '../container'

export const Title = wrap('div', 'title', {}, 'small', 'uppercase', 'large', 'xl', 'bold', 'heavy', 'capitalize', 'white')
export const Paragraph = wrap('div', 'paragraph', {}, 'large', 'bold', 'highlight', 'space', 'capitalize', 'white')
export const Spacer = wrap(Container, 'spacer', {}, 'small', 'large', 'xl', 'xs')
