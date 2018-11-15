import { useEffect } from 'react';
import { setRemote } from '../utils/remote-storage';

export function usePersistedContext(context, key = 'state') {
  const persistedContext = localStorage.getItem(key);
  return persistedContext ? JSON.parse(persistedContext) : context;
}

export function usePersistedReducer([state, dispatch], key = 'state') {
  useEffect(() => localStorage.setItem(key, JSON.stringify(state)), [state]);
  useEffect(() => setRemote(JSON.stringify(state)), [state]);
  return [state, dispatch];
}
