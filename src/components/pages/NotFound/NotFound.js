import React, { Fragment } from 'react'
import './NotFound.scss'

import Heading from 'components/ui/Heading'

/**
 * NotFound page component
 * @return {object} component with children
 */
const NotFound = () => (
	<Fragment>
		<Heading level={2}>404</Heading>

		<div className="notfound">Oops! This page doesn`t exist...</div>
	</Fragment>
)
/**
 * Display name
 * @type {string}
 */
NotFound.displayName = 'NotFound Page'

export default NotFound
