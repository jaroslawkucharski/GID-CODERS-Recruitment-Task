import React, { Fragment, useContext, useEffect, useState } from 'react'
import AppContext from 'provider/AppContext'
import './Favorites.scss'

import { IoIosHeartEmpty } from 'react-icons/io'
import { IoIosHeart } from 'react-icons/io'

/**
 * Favorites global component
 * @return {object} component with children
 */
const Favorites = () => {
	const { favorites } = useContext(AppContext)
	const [counter, setCounter] = useState(0)
	const [animation, setAnimation] = useState('')
	const isEmpty = counter === 0

	useEffect(() => {
		setCounter(favorites.length)

		favorites.length !== counter && setAnimation('favorites__animation')

		setTimeout(() => setAnimation(''), 1000)
	}, [favorites])

	return (
		<Fragment>
			<span>_</span>

			{isEmpty ? (
				<IoIosHeartEmpty className={`favorites ${animation}`} />
			) : (
				<IoIosHeart className={`favorites ${animation}`} />
			)}

			<span>_</span>
		</Fragment>
	)
}

/**
 * Display name
 * @type {string}
 */
Favorites.displayName = 'Favorites'

export default Favorites
