import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import TodoListItem from '../TodoListItem';

describe('TodoListItem', () => {
  it('renders without crashing', () => {
    const component = shallow(<TodoListItem />);
    expect(shallowToJson(component)).toMatchSnapshot();
  });
});
