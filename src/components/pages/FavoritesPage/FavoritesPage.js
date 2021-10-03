import React, { Fragment, useContext } from 'react'
import AppContext from 'provider/AppContext'
import uuid from 'react-uuid'

import Box from 'components/global/Box'
import Loader from 'components/ui/Loader'
import Heading from 'components/ui/Heading'

/**
 * Favorites page component
 * @return {object} component with children
 */
const Favorites = () => {
	const { isLoading, favorites } = useContext(AppContext)

	return (
		<Fragment>
			<Heading level={2}>Your favorites beers</Heading>

			{isLoading ? (
				<Loader />
			) : (
				<div className="main__section--boxes">
					{favorites.length
						? favorites.map(item => <Box key={uuid()} item={item} />)
						: 'Sorry bro, you don`t have any favorites beers :('}
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
