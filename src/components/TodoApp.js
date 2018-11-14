import React, {
  memo, useContext, useReducer,
} from 'react';

import Store from '../store';
import reducer from '../reducer';

import {
  usePersistedContext, usePersistedReducer,
} from '../hooks';

import Layout from './Layout';
import AddTodo from './AddTodo';
import TodoList from './TodoList';

const TodoApp = memo(() => {
  const globalStore = usePersistedContext(useContext(Store), 'state');

  const [state, dispatch] = usePersistedReducer(
    useReducer(reducer, globalStore),
    'state',
  );


  return (
    <Store.Provider value={{ state, dispatch }}>
      <Layout>
        <AddTodo />
        <TodoList />
      </Layout>
    </Store.Provider>
  );
});

export default TodoApp;
