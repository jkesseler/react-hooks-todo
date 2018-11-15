import { createContext } from 'react';
import { getRemote } from './utils/remote-storage';

async function hydrateStore() {
  return await getRemote();
}

const Store = createContext({ todos: hydrateStore() });
export default Store;
