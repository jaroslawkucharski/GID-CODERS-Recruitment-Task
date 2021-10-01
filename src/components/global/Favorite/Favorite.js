import React, { Fragment, useEffect, useState } from 'react'
import './Favorite.scss'
import PropTypes from 'prop-types'
import { IoIosHeartEmpty } from 'react-icons/io'
import { IoIosHeart } from 'react-icons/io'

/**
 * Favorite global component
 * @prop {number} count
 * @return {object} component with children
 */
const Favorite = ({ count }) => {
	const [counter, setCounter] = useState(count)
	const [animation, setAnimation] = useState('')

	useEffect(() => {
		setCounter(count)

		count !== counter && setAnimation('favorite__animation')

		setTimeout(() => setAnimation(''), 1000)
	}, [count])

	return (
		<Fragment>
			<span>_</span>

			{count > 0 ? (
				<IoIosHeart className={`favorite ${animation}`} />
			) : (
				<IoIosHeartEmpty className={`favorite ${animation}`} />
			)}

			<span>_</span>
		</Fragment>
	)
}

/**
 * Display name
 * @type {string}
 */
Favorite.displayName = 'Favorite'

/**
 * PropTypes
 * @type {object}
 */
Favorite.propTypes = {
	/**
	 * count - number of favorites beers
	 */
	count: PropTypes.number
}

/**
 * Default PropTypes
 * @type {object}
 */
Favorite.defaultProps = {
	count: 0
}

export default Favorite
