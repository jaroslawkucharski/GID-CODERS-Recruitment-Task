import React from 'react'
import PropTypes from 'prop-types'
import './Button.scss'

/**
 * Button UI component
 * @prop {string|node} children
 * @prop {string} variant
 * @prop {bool} fullWidth
 * @prop {func} onClick
 * @return {object} component with children
 */
const Button = ({ children, variant, fullWidth, onClick }) => (
	<button
		type="button"
		className={`
			button 
			${fullWidth ? 'button__full-width' : ''}
			button__${variant}
			`}
		onClick={onClick}>
		{children}
	</button>
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
	 * children - button children
	 */
	children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
	/**
	 * variant - button variant
	 */
	variant: PropTypes.oneOf(['primary', 'secondary']),
	/**
	 * fullWidth - button has full width
	 */
	fullWidth: PropTypes.bool,
	/**
	 * onClick - onClick
	 */
	onClick: PropTypes.func
}

/**
 * Default PropTypes
 * @type {object}
 */
Button.defaultProps = {
	variant: 'primary',
	fullWidth: false,
	onClick: () => null
}

export default Button
