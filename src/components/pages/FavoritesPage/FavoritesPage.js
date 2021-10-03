import React, { Fragment, useContext } from 'react'
import AppContext from 'provider/AppContext'
import uuid from 'react-uuid'

import Box from 'components/global/Box'
import Loader from 'components/ui/Loader'

/**
 * Favorites page component
 * @return {object} component with children
 */
const Favorites = () => {
	const { isLoading, favorites } = useContext(AppContext)

	return (
		<Fragment>
			{isLoading ? (
				<Loader />
			) : (
				<div className="main__section--boxes">
					{favorites.map(item => (
						<Box key={uuid()} item={item} />
					))}
				</div>
			)}
		</Fragment>
	)
}

/**
 * Display name
 * @type {string}
 */
Favorites.displayName = 'Favorites Page'

export default Favorites
