import React from 'react'
import { shallow } from 'enzyme'
import Heading from 'components/ui/Heading'

describe('<Heading /> component default', () => {
	let wrapper

	const props = {
		children: 'Hello world!'
	}

	wrapper = shallow(<Heading {...props} />)

	it('<Heading /> mount', () => {
		expect(wrapper.exists()).toBe(true)
	})
})

describe('<Heading /> component with props', () => {
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
