import React from 'react'
import { shallow } from 'enzyme'
import Banner from 'components/global/Banner'

describe('<Banner /> component default', () => {
	let wrapper

	wrapper = shallow(<Banner />)

	it('<Banner /> mount', () => {
		expect(wrapper.exists()).toBe(true)
	})
})
