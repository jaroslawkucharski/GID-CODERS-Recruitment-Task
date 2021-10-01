import React from 'react'
import ReactDOM from 'react-dom'
import AppProvider from 'provider/AppProvider'
import { HashRouter as Router } from 'react-router-dom'
import 'assets/styles/theme.scss'

import Header from 'components/pages/Header'
import Layout from 'components/pages'

const App = () => (
	<AppProvider>
		<Router>
			<Header />

			<Layout />
		</Router>
	</AppProvider>
)

/**
 * Display name
 * @type {string}
 */
App.displayName = 'App'

ReactDOM.render(<App />, document.getElementById('root'))
