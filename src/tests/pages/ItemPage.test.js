import React from 'react'
import { shallow } from 'enzyme'
import Provider from 'provider/AppProvider'
import ItemPage from 'components/pages/ItemPage'

describe('<ItemPage /> component default', () => {
	let wrapper

	const MainItemComponent = () => (
		<Provider>
			<ItemPage />
		</Provider>
	)

	wrapper = shallow(<MainItemComponent />)

	it('<ItemPage /> mount', () => {
		expect(wrapper.exists()).toBe(true)
	})
})
