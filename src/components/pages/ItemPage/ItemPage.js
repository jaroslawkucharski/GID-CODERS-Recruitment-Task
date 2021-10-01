import React, { useState, useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import AppContext from 'provider/AppContext'
import uuid from 'react-uuid'
import './ItemPage.scss'

/**
 * ItemPage page component
 * @return {object} component with children
 */
const ItemPage = () => {
	const [itemData, setItemData] = useState([])
	const { beersData } = useContext(AppContext)
	const { itemId } = useParams()

	useEffect(() => {
		setItemData(beersData.filter(item => item.id === Number(itemId)))
	}, [beersData])

	console.log(itemData)

	return (
		<main className="main">
			{itemData.map(({ name, description, image_url, first_brewed }) => (
				<div key={uuid()}>
					Name: {name}
					Desc: {description}
					{image_url}
					Premiere: {first_brewed}
				</div>
			))}
		</main>
	)
}

/**
 * Display name
 * @type {string}
 */
ItemPage.displayName = 'Item Page'

export default ItemPage
