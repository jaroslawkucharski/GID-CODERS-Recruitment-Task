import React, { useContext, useEffect } from 'react'
import AppContext from 'provider/AppContext'
import { Switch, Route } from 'react-router-dom'
import './Layout.scss'

import { punkApiPagination } from 'client/api/punkApi'

import Banner from 'components/global/Banner'
import MainPage from 'components/pages/MainPage'
import ItemPage from 'components/pages/ItemPage'
import FavoritesPage from 'components/pages/FavoritesPage'

/**
 * Layout page component
 * @prop {array} onClickFavorite
 * @return {object} component with children
 */
const Layout = () => {
	const { setAppData, loadMore, setLoading } = useContext(AppContext)

	/**
	 * fetchPunkApi - get data
	 * @return {function}
	 */
	const fetchPunkApi = async () => {
		try {
			setLoading(true)

			const { data } = await punkApiPagination(loadMore)

			setAppData(prev => [...prev, ...data])
		} catch (error) {
			console.log(error)
		} finally {
			setLoading(false)
		}
	}

	/**
	 * useEffect - fetch data
	 */
	useEffect(() => fetchPunkApi(), [loadMore])

	return (
		<main className="layout">
			<Banner />

			<Switch>
				<Route exact path="/">
					<MainPage />
				</Route>
				<Route exact path="/beer/:itemId">
					<ItemPage />
				</Route>
				<Route path="/favorite">
					<FavoritesPage />
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
