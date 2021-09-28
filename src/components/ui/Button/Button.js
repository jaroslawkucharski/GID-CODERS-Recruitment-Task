import React from 'react'
import PropTypes from 'prop-types'
import './Button.scss'

/**
 * Button UI component
 * @prop {string} variant
 * @prop {string} onClick
 * @prop {string|node} children
 * @return {object} component with children
 */
const Button = ({ variant, onClick, children }) => (
	<div className={`button button__${variant}`} onClick={onClick}>
		{children}
	</div>
)

/**
 * Display name
 * @type {string}
 */
Button.displayName = 'Button'

/**
 * PropTypes
 * @type {object}
 */
Button.propTypes = {
	/**
	 * variant - button variant, [primary, secondary]
	 */
	variant: PropTypes.string,
	/**
	 * onClick - button onClick function
	 */
	onClick: PropTypes.func,
	/**
	 * children - button children
	 */
	children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired
}

/**
 * Default PropTypes
 * @type {object}
 */
Button.defaultProps = {
	variant: 'primary',
	onClick: () => null
}

export default Button
