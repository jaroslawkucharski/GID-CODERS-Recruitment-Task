import React from 'react'
import { shallow } from 'enzyme'
import Provider from 'provider/AppProvider'
import Box from 'components/global/Box'

describe('<Box /> component default', () => {
	let wrapper

	const BoxComponent = () => (
		<Provider>
			<Box {...props} />
		</Provider>
	)

	const props = {
		item: {
			name: 'Name',
			type: 'Type',
			image: 'Image'
		}
	}

	wrapper = shallow(<BoxComponent />)

	it('<Box /> mount', () => {
		expect(wrapper.exists()).toBe(true)
	})
})
