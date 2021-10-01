import React, { useState, useMemo } from 'react'
import PropTypes from 'prop-types'
import AppContext from './AppContext'

/**
 * AppProvider
 * @prop {string} children
 * @return {object} component with children
 */
const AppProvider = ({ children }) => {
	// beersData - beers data
	const [beersData, setBeersData] = useState([])

	// loadMore - retry fetchdata fetch
	const [loadMore, setLoadMore] = useState(1)

	// isLoading - loading data
	const [isLoading, setLoading] = useState(true)

	const values = useMemo(
		() => ({ beersData, setBeersData, loadMore, setLoadMore, isLoading, setLoading }),
		[beersData, loadMore, isLoading]
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
