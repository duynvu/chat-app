import React from 'react';
import Enzyme from 'enzyme';
import { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Message from './Message';

const setup = () => {
  const props = {
    author: 'Tony',
    message: 'Hey'
  }

  Enzyme.configure({ adapter: new Adapter() })
  const enzymeWrapper = mount(<Message {...props} />);

  return {
    props,
    enzymeWrapper
  }
}

describe('Message', () => {
  it('should return itself', () => {
    const { enzymeWrapper } = setup();
    expect(enzymeWrapper.find('p').html()).toBe('<p><i>Tony</i>: Hey</p>')
  })
});
