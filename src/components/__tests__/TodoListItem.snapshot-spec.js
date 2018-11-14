import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import unwrapMemo from '../../unwrap-memo';
import TodoListItem from '../TodoListItem';

describe('TodoListItem', () => {
  it('renders without crashing', () => {
    const component = unwrapMemo(shallow, <TodoListItem />);
    expect(shallowToJson(component)).toMatchSnapshot();
  });
});
