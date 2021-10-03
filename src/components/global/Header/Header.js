import React from 'react'
import { NavLink } from 'react-router-dom'
import './Header.scss'

import Heading from 'components/ui/Heading'
import Favorites from 'components/global/Favorites'

/**
 * Header global component
 * @return {object} component with children
 */
const Header = () => (
	<header className="header">
		<NavLink to="/" activeClassName="selected">
			<Heading>: GID CODERS Recruitment Task :</Heading>
		</NavLink>

		<NavLink to="/favorite" activeClassName="selected">
			<Favorites />
		</NavLink>
	</header>
)

/**
 * Display name
 * @type {string}
 */
Header.displayName = 'Header'

export default Header
