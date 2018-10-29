import React from 'react'
import { shallow } from 'enzyme'
import TestFile from '../TestFile'

it('changes value', () => {
	const wrapper = shallow(<TestFile />);
	wrapper.find('input').simulate('change', {target: {value: 'Your new Value'}});
	expect(wrapper.state('mirror')).toBe('Your new Value');
})