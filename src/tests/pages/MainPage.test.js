import React from 'react'
import { shallow } from 'enzyme'
import Provider from 'provider/AppProvider'
import MainPage from 'components/pages/MainPage'

describe('<MainPage /> component default', () => {
	let wrapper

	const MainMainComponent = () => (
		<Provider>
			<MainPage />
		</Provider>
	)

	wrapper = shallow(<MainMainComponent />)

	it('<MainPage /> mount', () => {
		expect(wrapper.exists()).toBe(true)
	})
})
