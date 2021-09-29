import React, { Fragment, useCallback } from 'react'
import uuid from 'react-uuid'
import './MainPage.scss'

import Heading from 'components/ui/Heading'
import Box from 'components/global/Box'
import Favorite from 'components/global/Favorite'
import image from 'assets/images/beers_background.jpg'

/**
 * MainPage page component
 * @return {object} component with children
 */
const MainPage = () => {
	const beers = [
		{
			id: 1,
			name: 'Tyskie',
			type: 'Lager',
			image: 'https://images.punkapi.com/v2/2.png'
		},
		{
			id: 2,
			name: 'Lech',
			type: 'Lager',
			image: 'https://images.punkapi.com/v2/8.png'
		},
		{
			id: 3,
			name: 'Żywiec',
			type: 'IPA',
			image: 'https://images.punkapi.com/v2/88.png'
		},
		{
			id: 4,
			name: 'Żywiec',
			type: 'IPA',
			image: 'https://images.punkapi.com/v2/88.png'
		},
		{
			id: 5,
			name: 'Żywiec',
			type: 'IPA',
			image: 'https://images.punkapi.com/v2/88.png'
		},
		{
			id: 1,
			name: 'Tyskie',
			type: 'Lager',
			image: 'https://images.punkapi.com/v2/2.png'
		},
		{
			id: 2,
			name: 'Lech',
			type: 'Lager',
			image: 'https://images.punkapi.com/v2/8.png'
		},
		{
			id: 3,
			name: 'Żywiec',
			type: 'IPA',
			image: 'https://images.punkapi.com/v2/88.png'
		},
		{
			id: 4,
			name: 'Żywiec',
			type: 'IPA',
			image: 'https://images.punkapi.com/v2/88.png'
		},
		{
			id: 5,
			name: 'Żywiec',
			type: 'IPA',
			image: 'https://images.punkapi.com/v2/88.png'
		}
	]

	const test = useCallback(() => {
		console.log('test')
	}, [])

	return (
		<Fragment>
			<header className="header">
				<Heading>GID CODERS Recruitment Task</Heading>
				<Favorite />
			</header>

			<main className="main">
				<div className="main__section--img" style={{ backgroundImage: `url(${image})` }} />

				<div className="main__section--boxes">
					{beers.map(item => (
						<Box key={uuid()} item={item} onClickFavorite={test} />
					))}
				</div>
			</main>
		</Fragment>
	)
}

/**
 * Display name
 * @type {string}
 */
MainPage.displayName = 'MainPage'

export default MainPage
