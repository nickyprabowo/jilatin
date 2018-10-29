import React from 'react'
import { shallow, mount } from 'enzyme'
import AddModal from '../AddModal'

describe('Testing modal for adding gelato', () => {

	it('renders without fail', () => {
		const wrapper = shallow(<AddModal />)
		expect(wrapper.exists()).toBe(true)
	})

	it('renders correct header', () => {
		const wrapper = shallow(<AddModal />)
		const header = <h1>Add Gelato</h1>
		expect(wrapper.contains(header)).toBe(true)
	})

	it('has an ice cream name input', () => {
		const wrapper = shallow(<AddModal />)
		expect(wrapper.find('input[name="name"]').exists()).toBe(true)
	})

	it('has a description input', () => {
		const wrapper = shallow(<AddModal />)
		expect(wrapper.find('textarea[name="description"]').exists()).toBe(true)
	})

	it('has a stock input', () => {
		const wrapper = shallow(<AddModal />)
		expect(wrapper.find('input[name="stock"]').exists()).toBe(true)
	})

})

describe('Testing method and value in <AddModal/>', () => {

	it('should call onInputChange method when we input name', () => {
		const wrapper = mount(<AddModal/>)// why mount?
		const instance = wrapper.instance() // we use instance because our function is not the prototype of the class
		const input = wrapper.find('input[name="name"]')
		const spy = jest.spyOn(instance, 'onInputChange')
			.mockImplementation( e => spy.mockReturnValue(e.target.value) )
		
		instance.forceUpdate(); // why update?
		input.simulate('change', {target: {value: 'Vanilla'}})
		expect(spy).toHaveBeenCalled() // to check if function called
		// this works yeay!!
	})

	it('should receive correct value', () => {
		const wrapper = mount(<AddModal/>)// why mount?
		const instance = wrapper.instance()
		const input = wrapper.find('input[name="name"]')
		const spy = jest.spyOn(instance, 'onInputChange')
			.mockImplementation( e => spy.mockReturnValue(e.target.value) )
		
		instance.forceUpdate();
		input.simulate('change', {target: {value: 'Vanilla'}})
		expect(spy()).toBe('Vanilla') // to check the value
	})
})

describe('Testing form functionality', () => {
	it('`<form>` element should have a onSubmit attribute', () => {
		const wrapper = shallow(<AddModal />)
		const form = wrapper.find('#add_gelato')
	    expect(form.props().onSubmit).toBeDefined();
    })

    it('should call the onSubmit method', () => {
    	const wrapper = shallow(<AddModal />)
    	const instance = wrapper.instance()
		const form = wrapper.find('#add_gelato')
		const spy = jest.spyOn(instance, 'onSubmit')
			.mockImplementation( e => e.preventDefault())		

		form.simulate('submit')
		expect(spy()).toHaveBeenCalled()
    })
})