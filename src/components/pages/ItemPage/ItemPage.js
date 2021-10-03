import React, { useState, useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import AppContext from 'provider/AppContext'
import uuid from 'react-uuid'
import './ItemPage.scss'

import Heading from 'components/ui/Heading'

/**
 * ItemPage page component
 * @return {object} component with children
 */
const ItemPage = () => {
	const [itemData, setItemData] = useState([])
	const { beersData } = useContext(AppContext)
	const { itemId } = useParams()

	useEffect(() => setItemData(beersData.filter(({ id }) => id === Number(itemId))), [beersData])

	return itemData.map(
		({
			name,
			description,
			image_url,
			first_brewed,
			food_pairing,
			brewers_tips,
			contributed_by,
			abv,
			ibu,
			attenuation_level,
			ph,
			target_fg,
			target_og,
			ebc,
			srm
		}) => (
			<div className="main__item" key={uuid()}>
				<div className="main__item--image">
					<img src={image_url} title={name} alt={name} />
				</div>

				<div className="main__item--details">
					<Heading level={2}>{name}</Heading>

					<div>
						<Heading level={3}>Description</Heading>

						<p>{description}</p>
					</div>

					<div>
						<Heading level={3}>Brewers tips</Heading>

						<p>{brewers_tips}</p>
					</div>

					<div>
						<Heading level={3}>Food pairing</Heading>

						{food_pairing.map(item => (
							<ul key={uuid()}>
								<li>- {item}</li>
							</ul>
						))}
					</div>

					<div>
						<Heading level={3}>Details</Heading>
						<ul>
							<li>
								<strong>ABV:</strong> {abv}
							</li>

							<li>
								<strong>IBU:</strong> {ibu}
							</li>

							<li>
								<strong>Target FG:</strong> {target_fg}
							</li>

							<li>
								<strong>Target OG:</strong> {target_og}
							</li>

							<li>
								<strong>EBC:</strong> {ebc}
							</li>

							<li>
								<strong>SRM:</strong> {srm}
							</li>

							<li>
								<strong>PH:</strong> {ph}
							</li>

							<li>
								<strong>Attenuation level:</strong> {attenuation_level}
							</li>

							<li>
								<strong>First brewed:</strong> {first_brewed}
							</li>

							<li>
								<strong>Contributed by:</strong> {contributed_by}
							</li>
						</ul>
					</div>
				</div>
			</div>
		)
	)
}

/**
 * Display name
 * @type {string}
 */
ItemPage.displayName = 'Item Page'

export default ItemPage
