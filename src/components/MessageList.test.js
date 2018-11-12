import React from 'react';
import Enzyme from 'enzyme';
import { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-reac-16';
import MessageList from './MessageList';

const setup = () => {
  const props = {
    messages: []
  }

  Enzyme.configure({ adapter: new Adapter() })
  const enzymeWrapper = mount(<MessageList {...props}/>)

  return {
    props,
    enzymeWrapper
  }
}

describe('MessageList', () => {
	it('should be render itself', () => {
		const { enzymeWrapper } = setup();
		expect(enzymeWrapper.find('section#messages-list').length).toBe(1);
	})
})
