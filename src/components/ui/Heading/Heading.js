import React from 'react'
import PropTypes from 'prop-types'
import './Heading.scss'

/**
 * Heading UI component
 * @prop {number} level
 * @prop {string|node} children
 * @return {object} component with children
 */
const Heading = ({ level, children }) => {
	const headingComponent = React.createElement(
		`h${level}`,
		{ className: `heading heading__h${level}` },
		children
	)

	return headingComponent
}

/**
 * Display name
 * @type {string}
 */
Heading.displayName = 'Heading'

/**
 * PropTypes
 * @type {object}
 */
Heading.propTypes = {
	/**
	 * level - heading level
	 */
	level: PropTypes.number,
	/**
	 * children - heading children
	 */
	children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired
}

/**
 * Default PropTypes
 * @type {object}
 */
Heading.defaultProps = {
	level: 1
}

export default Heading
