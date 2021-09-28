import React from 'react'
import { shallow } from 'enzyme'
import Heading from 'components/ui/Heading'

describe('<Heading /> mount', () => {
	let wrapper

	const props = {
		children: 'Hello world!'
	}

	wrapper = shallow(<Heading {...props} />)

	it('<Heading /> mount', () => {
		expect(wrapper.exists()).toBe(true)
	})
})

describe('<Heading /> mount with level prop', () => {
	let wrapper

	const props = {
		level: 2,
		children: 'Hello world!'
	}

	wrapper = shallow(<Heading {...props} />)

	it('<Heading /> mount', () => {
		expect(wrapper.exists()).toBe(true)
	})
})
