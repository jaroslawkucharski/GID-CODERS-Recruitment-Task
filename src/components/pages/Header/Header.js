import React from 'react'
import { NavLink } from 'react-router-dom'
import './Header.scss'

import Heading from 'components/ui/Heading'
import Favorite from 'components/global/Favorite'

const Header = () => (
	<header className="header">
		<NavLink to="/" activeClassName="selected">
			<Heading>: GID CODERS Recruitment Task :</Heading>
		</NavLink>

		<NavLink to="/test" activeClassName="selected">
			<Favorite />
		</NavLink>
	</header>
)

/**
 * Display name
 * @type {string}
 */
Header.displayName = 'Header'

export default Header
