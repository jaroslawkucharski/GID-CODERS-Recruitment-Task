import React from 'react'
import { shallow } from 'enzyme'
import Favorite from 'components/global/Favorite'

describe('<Favorite /> mount', () => {
	let wrapper

	const props = {
		count: 0
	}

	wrapper = shallow(<Favorite {...props} />)

	it('<Heading /> mount', () => {
		expect(wrapper.exists()).toBe(true)
	})
})
