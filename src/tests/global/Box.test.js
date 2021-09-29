import React from 'react'
import { shallow } from 'enzyme'
import Box from 'components/global/Box'

describe('<Box /> component default', () => {
	let wrapper

	const props = {
		item: {
			name: 'Name',
			type: 'Type',
			image: 'Image'
		}
	}

	wrapper = shallow(<Box {...props} />)

	it('<Box /> mount', () => {
		expect(wrapper.exists()).toBe(true)
	})
})
