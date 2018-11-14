import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import unwrapMemo from '../../unwrap-memo';

import TodoList from '../TodoList';

describe('TodoList', () => {
  it('renders without crashing', () => {
    const component = unwrapMemo(shallow, <TodoList />);
    expect(shallowToJson(component)).toMatchSnapshot();
  });
});
