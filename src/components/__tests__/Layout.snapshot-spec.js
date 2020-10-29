import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import Layout from '../Layout';

describe('Layout', () => {
  it('renders without crashing', () => {
    const component = shallow(<Layout />);
    expect(shallowToJson(component)).toMatchSnapshot();
  });
});
