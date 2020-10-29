import React, { useContext, useReducer } from 'react';
import { usePersistedContext, usePersistedReducer } from './hooks';
import TodoApp from './components/TodoApp';
import Store from './store';
import reducer from './reducer';

const STORE_KEY = 'app-state';

const App = (() => {
  const globalStore = usePersistedContext(useContext(Store), STORE_KEY);

  const [state, dispatch] = usePersistedReducer(
    useReducer(reducer, globalStore),
    STORE_KEY,
  );

  return (
    <Store.Provider value={{ state, dispatch }}>
      <TodoApp />
    </Store.Provider>
  );
});

export default App;
