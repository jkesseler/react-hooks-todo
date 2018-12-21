import React, { useContext, useReducer } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';

import Store from '../store';
import reducer from '../reducer';

import { usePersistedContext, usePersistedReducer } from '../hooks';

import Layout from './Layout';
import AddTodo from './AddTodo';
import TodoList from './TodoList';

export const TodoApp = () => (
  <CssBaseline>
    <Layout>
      <AddTodo />
      <TodoList />
    </Layout>
  </CssBaseline>
);

export default (() => {
  const globalStore = usePersistedContext(useContext(Store), 'state');

  const [state, dispatch] = usePersistedReducer(
    useReducer(reducer, globalStore),
    'state',
  );

  return (
    <Store.Provider value={{ state, dispatch }}>
      <TodoApp />
    </Store.Provider>
  );
});
