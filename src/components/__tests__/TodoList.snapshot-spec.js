import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import { NIL as NIL_UUID } from 'uuid';
import { TodoList } from '../TodoList';

const componentProps = {
  todos: [{
    id: NIL_UUID,
    text: 'test',
  }],
  toggleTodo: () => {},
  removeTodo: () => {},
};


describe('TodoList', () => {
  it('renders without crashing', () => {
    const component = shallow(<TodoList {...componentProps} />);
    expect(shallowToJson(component)).toMatchSnapshot();
  });
});
