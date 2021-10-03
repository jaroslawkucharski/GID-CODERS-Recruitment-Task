import React, { Fragment, useContext, useCallback } from 'react'
import AppContext from 'provider/AppContext'
import uuid from 'react-uuid'
import './MainPage.scss'

import Box from 'components/global/Box'
import Button from 'components/ui/Button'
import Loader from 'components/ui/Loader'

/**
 * MainPage page component
 * @return {object} component with children
 */
const MainPage = () => {
	const { appData, loadMore, setLoadMore, isLoading } = useContext(AppContext)

	/**
	 * handleLoadMore - fetch data
	 * @return {function}
	 */
	const handleLoadMore = useCallback(() => setLoadMore(loadMore + 1), [loadMore])

	return (
		<Fragment>
			{isLoading ? (
				<Loader />
			) : (
				<div className="main__section--boxes">
					{appData.map(item => (
						<Box key={uuid()} item={item} />
					))}
				</div>
			)}

			<div className="main__button">
				<Button onClick={handleLoadMore} fullWidth>
					: Load more :
				</Button>
			</div>
		</Fragment>
	)
}

/**
 * Display name
 * @type {string}
 */
MainPage.displayName = 'Main Page'

export default MainPage
