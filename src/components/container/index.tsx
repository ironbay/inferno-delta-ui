import './styles.css'
import createElement from 'inferno-create-element'
import wrap from '../wrap'

export const Container = wrap('div', 'container', {},
	'column',
	'justify-center',
	'justify-between',
	'justify-end',
	'align-center',
	'grow',
	'equal',
	'hide-mobile',
	'responsive',
	'break',
	'fill',
	'gray',
	'padding',
	'border',
)

export const Wrap = wrap(Container, 'container-wrap', {})

export const Card = wrap(Container, 'card', {}, 'shadow')

export const Row = wrap(Container, 'row', {})

export const Section = wrap(Container, 'section', {}, 'large', 'xl', 'small')

export function Banner(props) {
	return (
		<Container justify-center className='banner'>
			<Wrap>
				{props.children}
			</Wrap>
		</Container>
	)
}
