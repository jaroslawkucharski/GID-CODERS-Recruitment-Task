import React, { memo } from 'react'
import PropTypes from 'prop-types'
import './Box.scss'

import Heading from 'components/ui/Heading'
import Button from 'components/ui/Button'
import { IoIosHeartEmpty } from 'react-icons/io'
// import { IoIosHeart } from 'react-icons/io'

/**
 * Box UI component
 * @prop {object} item
 * @prop {func} onClickFavorite
 * @return {object} component with children
 */
const Box = ({ item, onClickFavorite }) => {
	const { name, type, image } = item

	return (
		<div className="box">
			<img src={image} />

			<div className="box__name">
				<Heading level={3}>{name}</Heading>
			</div>

			<div className="box__type">{type}</div>

			<div className="box__hover">
				<Button fullWidth>: Read more :</Button>
				<Button variant="secondary" fullWidth onClick={onClickFavorite}>
					Add to _ <IoIosHeartEmpty /> _{/* Remove _ <IoIosHeart /> _ */}
				</Button>
			</div>
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
	 * onClickFavorite - onClick for favorite button
	 */
	onClickFavorite: PropTypes.func.isRequired
}

export default memo(Box)
