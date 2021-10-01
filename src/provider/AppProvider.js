import React, { useState, useMemo } from 'react'
import PropTypes from 'prop-types'
import AppContext from './AppContext'

/**
 * AppProvider
 * @prop {string} children
 * @return {object} component with children
 */
const AppProvider = ({ children }) => {
	const [beersData, setBeersData] = useState([])

	const values = useMemo(() => ({ beersData, setBeersData }), [beersData])

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
