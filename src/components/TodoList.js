/* eslint-disable react/no-array-index-key */
import React, { memo, useContext } from 'react';
import { List, Paper } from '@material-ui/core';
import TodoListItem from './TodoListItem';

import Store from '../store';

export const TodoList = memo(({ todos, toggleTodo, removeTodo }) => {
  if (todos && todos.length > 0) {
    return (
      <Paper>
        <List style={{ overflow: 'scroll' }}>
          {todos.map((todo, idx) => (
            <TodoListItem
              {...todo}
              key={idx}
              divider={idx !== todo.length - 1}
              onButtonClick={() => removeTodo(todo)}
              onCheckboxToggle={() => toggleTodo(todo)}
            />
          ))}
        </List>
      </Paper>
    );
  }
  return null;
});


export default (() => {
  const { state, dispatch } = useContext(Store);
  const { todos } = state;

  const toggleTodo = todo => dispatch({ type: 'CHECKED', payload: todo });
  const removeTodo = todo => dispatch({ type: 'REMOVE', payload: todo });

  return (<TodoList todos={todos} toggleTodo={toggleTodo} removeTodo={removeTodo} />);
});
