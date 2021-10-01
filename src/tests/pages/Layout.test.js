import React from 'react'
import { shallow } from 'enzyme'
import Provider from 'provider/AppProvider'
import Layout from 'components/pages'

describe('<Layout /> component default', () => {
	let wrapper

	const LayoutComponent = () => (
		<Provider>
			<Layout />
		</Provider>
	)

	wrapper = shallow(<LayoutComponent />)

	it('<Layout /> mount', () => {
		expect(wrapper.exists()).toBe(true)
	})
})
