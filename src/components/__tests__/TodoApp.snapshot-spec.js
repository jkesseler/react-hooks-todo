import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import unwrapMemo from '../../unwrap-memo';

import TodoApp from '../TodoApp';

describe('TodoApp', () => {
  it('renders without crashing', () => {
    const component = unwrapMemo(shallow, <TodoApp />);
    expect(shallowToJson(component)).toMatchSnapshot();
  });
});
