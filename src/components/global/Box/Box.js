import React, { useContext, useCallback } from 'react'
import PropTypes from 'prop-types'
import AppContext from 'provider/AppContext'
import { Link } from 'react-router-dom'
import './Box.scss'

import Heading from 'components/ui/Heading'
import Button from 'components/ui/Button'

import { IoIosHeartEmpty } from 'react-icons/io'
import { IoIosHeart } from 'react-icons/io'

/**
 * Box global component
 * @prop {object} item
 * @return {object} component with children
 */
const Box = ({ item }) => {
	const { favorites, setFavorites } = useContext(AppContext)
	const { id, name, tagline, image_url } = item
	const isInFavorites = favorites.find(item => item.id === id)

	/**
	 * handleAddToFavorite - add item to favorites
	 * @return {function}
	 */
	const handleAddToFavorite = useCallback(
		() => setFavorites(prev => [...prev, item]),
		[favorites, setFavorites]
	)

	/**
	 * handleRemovefromFavorite - remove item from favorites
	 * @return {function}
	 */
	const handleRemovefromFavorite = useCallback(
		() => setFavorites(favorites.filter(item => item.id !== id)),
		[favorites, setFavorites]
	)

	return (
		<div className="box">
			<img src={image_url} title={name} alt={name} />

			<div className="box__name">
				<Heading level={3}>{name}</Heading>
			</div>

			<div className="box__tagline">{tagline}</div>

			<div className="box__hover">
				<Button fullWidth>
					<Link to={`/beer/${id}`}>: Read more :</Link>
				</Button>
				{isInFavorites ? (
					<Button variant="secondary" onClick={handleRemovefromFavorite} fullWidth>
						Remove from _ <IoIosHeart /> _
					</Button>
				) : (
					<Button variant="secondary" onClick={handleAddToFavorite} fullWidth>
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

export default Box
