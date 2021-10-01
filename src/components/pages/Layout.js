import React, { useContext, useEffect } from 'react'
import AppContext from 'provider/AppContext'
import { Switch, Route } from 'react-router-dom'

import { punkApiPagination } from 'client/api/punkApi'

import MainPage from 'components/pages/MainPage'
import ItemPage from 'components/pages/ItemPage'

/**
 * Layout page component
 * @prop {array} onClickFavorite
 * @return {object} component with children
 */
const Layout = () => {
	const { setBeersData, loadMore, setLoading } = useContext(AppContext)

	/**
	 * fetchPunkApi - get data
	 * @return {function}
	 */
	const fetchPunkApi = async () => {
		try {
			setLoading(true)

			const { data } = await punkApiPagination(loadMore)

			setBeersData(prev => prev.concat(data))
		} catch (error) {
			console.log(error)
		} finally {
			setLoading(false)
		}
	}

	const test = () => null

	/**
	 * useEffect - fetch data
	 */
	useEffect(() => fetchPunkApi(), [loadMore])

	return (
		<main className="main">
			<Switch>
				<Route exact path="/">
					<MainPage onClickFavorite={test} />
				</Route>
				<Route exact path="/:itemId">
					<ItemPage />
				</Route>
				<Route path="/test">
					<main className="main">TEST</main>
				</Route>
			</Switch>
		</main>
	)
}

/**
 * Display name
 * @type {string}
 */
Layout.displayName = 'Layout'

export default Layout
