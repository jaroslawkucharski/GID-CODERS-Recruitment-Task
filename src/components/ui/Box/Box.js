import React from 'react'
import PropTypes from 'prop-types'
import './Box.scss'

import Heading from 'components/ui/Heading'

/**
 * Box UI component
 * @prop {object} item
 * @prop {func} onClick
 * @return {object} component with children
 */
const Box = ({ item, onClick }) => {
	const { name, type, image } = item

	return (
		<div className="box" onClick={onClick}>
			<img src={image} />

			<div className="box__name">
				<Heading level={3}>{name}</Heading>
			</div>

			<div className="box__type">{type}</div>
		</div>
	)
}

/**
 * Display name
 * @type {string}
 */
Box.displayName = 'Box'

/**
 * PropTypes
 * @type {object}
 */
Box.propTypes = {
	/**
	 * item - item
	 */
	item: PropTypes.object.isRequired,
	/**
	 * onClick - onClick
	 */
	onClick: PropTypes.func
}

/**
 * Default PropTypes
 * @type {object}
 */
Box.defaultProps = {
	onClick: () => null
}

export default Box
