/* eslint-disable react/no-array-index-key */
import React, { memo, useContext } from 'react';
import { List, Paper } from '@material-ui/core';
import TodoListItem from './TodoListItem';

import Store from '../store';


const TodoList = memo(() => {
  const { state, dispatch } = useContext(Store);
  const { todos } = state;

  if (todos && todos.length > 0) {
    return (
      <Paper style={{ margin: 16 }}>
        <List style={{ overflow: 'scroll' }}>
          {todos.map((todo, idx) => (
            <TodoListItem
              {...todo}
              key={idx}
              divider={idx !== todo.length - 1}
              onButtonClick={() => dispatch({ type: 'REMOVE', payload: todo })}
              onCheckboxToggle={() => dispatch({ type: 'CHECKED', payload: todo })}
            />
          ))}
        </List>
      </Paper>
    );
  }
  return null;
});

export default TodoList;
