import React from 'react'
import { shallow } from 'enzyme'
import Loader from 'components/ui/Loader'

describe('<Loader /> component default', () => {
	let wrapper

	wrapper = shallow(<Loader />)

	it('<Loader /> mount', () => {
		expect(wrapper.exists()).toBe(true)
	})
})
