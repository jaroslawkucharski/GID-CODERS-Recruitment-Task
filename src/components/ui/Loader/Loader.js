import React from 'react'
import './Loader.scss'

/**
 * Loader UI component
 * @return {object} component with children
 */
const Loader = () => (
	<div className="loader">
		<div className="loader__container">
			<div></div>
			<div></div>
			<div></div>
		</div>
	</div>
)

/**
 * Display name
 * @type {string}
 */
Loader.displayName = 'Loader'

export default Loader
