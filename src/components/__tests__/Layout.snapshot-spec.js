import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import unwrapMemo from '../../unwrap-memo';

import Layout from '../Layout';

describe('Layout', () => {
  it('renders without crashing', () => {
    const component = unwrapMemo(shallow, <Layout />);
    expect(shallowToJson(component)).toMatchSnapshot();
  });
});
