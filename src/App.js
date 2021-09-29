import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import 'assets/styles/theme.scss'

import MainPage from 'components/pages/MainPage'

const App = () => (
	<Router>
		<MainPage />
	</Router>
)

ReactDOM.render(<App />, document.getElementById('root'))
