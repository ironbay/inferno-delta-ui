import * as createElement from 'inferno-create-element'
import { Router, Route, Link } from 'inferno-router';
import * as History from 'history';
const browserHistory = History.createBrowserHistory()

export const history = browserHistory

import Root from './pages/root'
import ExamplePage from './pages/example-page'
import ComponentPage from './pages/component-page'
import FormPage from './pages/form-page'

export const routes = (
	<Router history={browserHistory}>
		<Route path='/' component={Root}>
			<Route path='/' component={ComponentPage} />
			<Route path='/form' component={FormPage} />
		</Route>
	</Router>
)
