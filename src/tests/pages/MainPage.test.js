import React from 'react'
import { shallow } from 'enzyme'
import MainPage from 'components/pages/MainPage'

describe('<MainPage /> component default', () => {
	let wrapper

	wrapper = shallow(<MainPage />)

	it('<MainPage /> mount', () => {
		expect(wrapper.exists()).toBe(true)
	})
})
