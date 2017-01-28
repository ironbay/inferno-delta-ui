import Delta from "../../data/delta";
import './styles.css'
import * as createElement from 'inferno-create-element'
import * as Component from 'inferno-component'
import { Title, Spacer, Paragraph } from '../../components/text'
import Container from '../../components/container'
import Button from '../../components/button'
import Header from '../../components/header'
import Section from '../../components/section'
import Grid from '../../components/grid'
import { Input } from '../../components/form'

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
			<Container column className='form-page'>
				<Header>
					<Container.Wrap align-center justify-between>
						<Title heavy>IRONBAY</Title>
						<Container hide-mobile justify-center grow >
							<Button transparent shrink>Features</Button>
							<Button transparent shrink>Pricing</Button>
							<Button transparent shrink>Team</Button>
							<Button transparent shrink>Blog</Button>
						</Container>
						<Container hide-mobile>
							<Button to='/form'>Register</Button>
						</Container>
					</Container.Wrap>
				</Header>
				<Section column align-center>
					<Container.Wrap column>
						<Grid two>
							<Container column>
								<Title xl>Let's find you a job</Title>
								<Paragraph>
									Seriously though that wasn't just a catch phrase we are really really really great. Really you need to check us out more seriously
								</Paragraph>
								<Spacer large />
								<Container column>
									<Input placeholder='Your full name' />
									<Input placeholder='Email Address' />
									<Input type='password' placeholder='Choose Password' />
									<Container>
										<Button>Register</Button>
									</Container>
								</Container>
							</Container>
						</Grid>
					</Container.Wrap>
				</Section>

			</Container>
		)
	}
}
