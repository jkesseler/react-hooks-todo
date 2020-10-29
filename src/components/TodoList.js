/* eslint-disable react/no-array-index-key */
import React, { memo, useContext } from 'react';
import PropTypes from 'prop-types';
import { List, Paper } from '@material-ui/core';
import TodoListItem from './TodoListItem';

import Store from '../store';

export const TodoList = ({ todos = [], toggleTodo, removeTodo }) => {
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
};

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequried,
  })),
  toggleTodo: PropTypes.func.isRequired,
  removeTodo: PropTypes.func.isRequired,
};

TodoList.defaultProps = {
  todos: [],
};


export default memo(() => {
  const { state, dispatch } = useContext(Store);
  const { todos } = state;

  const toggleTodo = todo => dispatch({ type: 'CHECKED', payload: todo });
  const removeTodo = todo => dispatch({ type: 'REMOVE', payload: todo });

  return <TodoList todos={todos} toggleTodo={toggleTodo} removeTodo={removeTodo} />;
});
