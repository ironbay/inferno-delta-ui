import Delta from "../../data/delta";
import './styles.css'
import createElement from 'inferno-create-element'
import Component from 'inferno-component'
import { Title, Spacer, Paragraph } from '../../components/text'
import { Container, Wrap, Section } from '../../components/container'
import Button from '../../components/button'
import Grid from '../../components/grid'

interface IProps {
	delta: Delta
	history
}

interface IState {

}

export default class ComponentPage extends Component<IProps, IState> {
	constructor() {
		super()
	}
	render() {
		return (
			<Container column className='component-page'>
				<Container justify-center style={{height: '5rem'}}>
					<Wrap align-center justify-between>
						<Title heavy>IRONBAY</Title>
						<Container hide-mobile justify-center grow >
							<Button transparent shrink>Features</Button>
							<Button transparent shrink>Pricing</Button>
							<Button transparent shrink>Team</Button>
							<Button transparent shrink>Blog</Button>
						</Container>
						<Button to='/form' small>Register</Button>
					</Wrap>
				</Container>
				<Container justify-center>
						<Wrap column justify-center>
							<Spacer xl />
							<Spacer xl />
							<Spacer xl />
							<Title xl>Some great text<br/> that catchs your attention</Title>
							<Spacer />
							<Paragraph>
							Seriously though that wasn't just a catch phrase we are really really <br />really great. Really you need to check us out more seriously
							</Paragraph>
							<Spacer />
							<Container>
								<Button>Thing 1</Button>
								<Spacer />
								<Button transparent border dark>Thing 2</Button>
							</Container>
							<Spacer xl />
							<Spacer xl />
							<Spacer xl />
							<Spacer xl />
						</Wrap>
				</Container>
				<Section white justify-center>
					<Wrap>
						<Grid three>
							<Container column>
								<Title heavy>Step 1</Title>
								<Spacer small />
								<Paragraph>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse laoreet aliquet tristique. Donec non turpis mi. Ut in mattis velit. Nulla lacinia mi eu metus vehicula gravida.
								</Paragraph>
							</Container>
							<Container column>
								<Title heavy>Step 1</Title>
								<Spacer small />
								<Paragraph>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse laoreet aliquet tristique. Donec non turpis mi. Ut in mattis velit. Nulla lacinia mi eu metus vehicula gravida.
								</Paragraph>
							</Container>
							<Container column>
								<Title heavy>Step 1</Title>
								<Spacer small />
								<Paragraph>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse laoreet aliquet tristique. Donec non turpis mi. Ut in mattis velit. Nulla lacinia mi eu metus vehicula gravida.
								</Paragraph>
							</Container>
						</Grid>
					</Wrap>
				</Section>
				<Section white justify-center>
					<Wrap>
						<Grid two>
							<Container hide-mobile justify-center grow>
								<img width='275' height='275' src='https://image.flaticon.com/icons/svg/321/321805.svg' />
							</Container>
							<Container column >
								<Title heavy>01</Title>
								<Title large>
									Some special <br />
									This is also so great
								</Title>
								<Spacer small />
								<Paragraph>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse laoreet aliquet tristique. Donec non turpis mi. Ut in mattis velit. Nulla lacinia mi eu metus vehicula gravida.
								</Paragraph>
							</Container>
						</Grid>
					</Wrap>
				</Section>
				<Section white justify-center>
					<Wrap>
						<Grid two>
							<Container column >
								<Title heavy>02</Title>
								<Title large>
									Some special <br />
									This is also so great
								</Title>
								<Spacer small />
								<Paragraph>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse laoreet aliquet tristique. Donec non turpis mi. Ut in mattis velit. Nulla lacinia mi eu metus vehicula gravida.
								</Paragraph>
							</Container>
							<Container hide-mobile justify-center grow>
								<img width='275' height='275' src='https://image.flaticon.com/icons/svg/321/321773.svg' />
							</Container>
						</Grid>
					</Wrap>
				</Section>
			</Container>
		)
	}
}
