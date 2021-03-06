import createElement from 'inferno-create-element'
import { Router, Route } from 'inferno-router'
import { createBrowserHistory } from 'history'
const browserHistory = createBrowserHistory()

export const history = browserHistory

import Root from './pages/root'
import ExamplePage from './pages/example-page'
import ComponentPage from './pages/component-page'

export const routes = (
	<Router history={browserHistory}>
		<Route path='/' component={Root}>
			<Route path='/' component={ComponentPage} />
		</Route>
	</Router>
)
