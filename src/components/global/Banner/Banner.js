import React from 'react'
import './Banner.scss'

import imageAvif from 'assets/images/beers_background.avif'
import imageJpg from 'assets/images/beers_background.jpg'

/**
 * Banner global component
 * @prop {object} item
 * @return {object} component with children
 */
const Banner = () => (
	<div className="banner">
		<picture>
			<source srcSet={imageAvif} type="image/avif" />
			<img decoding="async" loading="lazy" src={imageJpg} alt="Banner" />
		</picture>
	</div>
)

/**
 * Display name
 * @type {string}
 */
Banner.displayName = 'Banner'

export default Banner
