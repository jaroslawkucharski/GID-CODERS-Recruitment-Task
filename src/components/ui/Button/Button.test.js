import React from 'react'
import { shallow } from 'enzyme'
import Button from 'components/ui/Button'

describe('<Button /> test', () => {
	let wrapper

	const props = {
		children: 'Hello world!'
	}

	wrapper = shallow(<Button {...props} />)

	it('<Button /> mount', () => {
		expect(wrapper.exists()).toBe(true)
	})

	it('<Button /> click simulate', () => {
		const button = wrapper.find('.button')

		button.simulate('click')

		wrapper.update()
	})
})

describe('<Button /> test', () => {
	let wrapper

	const props = {
		variant: 'secondary',
		onClick: () => null,
		children: <p>Hello world!</p>
	}

	wrapper = shallow(<Button {...props} />)

	it('<Button /> mount', () => {
		expect(wrapper.exists()).toBe(true)
	})
})
