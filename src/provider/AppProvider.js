import React, { useState, useMemo } from 'react'
import PropTypes from 'prop-types'
import AppContext from './AppContext'

/**
 * AppProvider
 * @prop {string} children
 * @return {object} component with children
 */
const AppProvider = ({ children }) => {
	// appData - app data
	const [appData, setAppData] = useState([])

	// loadMore - retry fetchdata fetch
	const [loadMore, setLoadMore] = useState(1)

	// isLoading - loading data
	const [isLoading, setLoading] = useState(true)

	// favorite - favorite data
	const [favorites, setFavorites] = useState([])

	const values = useMemo(
		() => ({
			appData,
			setAppData,
			loadMore,
			setLoadMore,
			isLoading,
			setLoading,
			favorites,
			setFavorites
		}),
		[appData, loadMore, isLoading, favorites]
	)

	return <AppContext.Provider value={values}>{children}</AppContext.Provider>
}

/**
 * AppProvider display name
 * @type {string}
 */
AppProvider.displayName = 'AppProvider'

/**
 * PropTypes
 * @type {object}
 */
AppProvider.propTypes = {
	/**
	 * children - provider children
	 */
	children: PropTypes.node.isRequired
}

export default AppProvider
