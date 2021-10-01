import React, { memo, useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import './Box.scss'

import Heading from 'components/ui/Heading'
import Button from 'components/ui/Button'

import { IoIosHeartEmpty } from 'react-icons/io'
import { IoIosHeart } from 'react-icons/io'

/**
 * Box UI component
 * @prop {object} item
 * @return {object} component with children
 */
const Box = ({ item }) => {
	const [isFavorite, setFavorite] = useState(false)

	const { id, name, tagline, image_url } = item

	useEffect(() => {
		const favorite = localStorage.getItem(`favorite${id}`)

		console.log(favorite)

		setFavorite(!!favorite)
	}, [localStorage])

	return (
		<div className="box">
			<img src={image_url} />

			<div className="box__name">
				<Heading level={3}>{name}</Heading>
			</div>

			<div className="box__tagline">{tagline}</div>

			<div className="box__hover">
				<Button fullWidth>
					<Link to={`/${id}`}>: Read more :</Link>
				</Button>

				{isFavorite ? (
					<Button variant="secondary" fullWidth>
						Remove _ <IoIosHeart /> _
					</Button>
				) : (
					<Button variant="secondary" fullWidth>
						Add to _ <IoIosHeartEmpty /> _
					</Button>
				)}
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
	item: PropTypes.object.isRequired
}

export default memo(Box)
