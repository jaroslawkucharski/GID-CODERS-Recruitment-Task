import React from 'react'
import { shallow } from 'enzyme'
import Provider from 'provider/AppProvider'
import Favorites from 'components/global/Favorites'

describe('<Favorites /> component default', () => {
	let wrapper

	const FavoritesComponent = () => (
		<Provider>
			<Favorites />
		</Provider>
	)

	wrapper = shallow(<FavoritesComponent />)

	it('<Favorites /> mount', () => {
		expect(wrapper.exists()).toBe(true)
	})
})

describe('<Favorites /> component with props', () => {
	let wrapper

	const props = {
		count: 1
	}

	const FavoritesComponent = () => (
		<Provider>
			<Favorites {...props} />
		</Provider>
	)

	wrapper = shallow(<FavoritesComponent />)

	it('<Favorites /> mount', () => {
		expect(wrapper.exists()).toBe(true)
	})
})
