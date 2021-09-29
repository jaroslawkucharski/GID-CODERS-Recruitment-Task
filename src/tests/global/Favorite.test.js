import React from 'react'
import { shallow } from 'enzyme'
import Favorite from 'components/global/Favorite'

describe('<Favorite /> component default', () => {
	let wrapper

	wrapper = shallow(<Favorite />)

	it('<Heading /> mount', () => {
		expect(wrapper.exists()).toBe(true)
	})

	it('<Heading /> expect `IoIosHeartEmpty`', () => {
		expect(wrapper.find('IoIosHeartEmpty').exists()).toBe(true)
	})
})

jest.useRealTimers()

describe('<Favorite /> component with props', () => {
	let wrapper

	const props = {
		count: 1
	}

	wrapper = shallow(<Favorite {...props} />)

	it('<Heading /> mount', () => {
		expect(wrapper.exists()).toBe(true)
	})

	it('<Heading /> expect `IoIosHeart`', () => {
		expect(wrapper.find('IoIosHeart').exists()).toBe(true)
	})
})
