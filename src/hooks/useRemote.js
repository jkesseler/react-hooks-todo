/**
 * Simple remote remoteStorage using https://jsonbin.io free API
 * The entire todos state is stored as one single item
 */
import { useEffect } from 'react';
import settings from '../settings';

function apiRequest(method = 'GET', data = {}) {
  return fetch('https://api.jsonbin.io/b/', {
    method,
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
      'secret-key': settings.getJSONBinAPIKey(),
      name: settings.getJSONBinName(),
    },
    body: JSON.stringify(data),
  });
}

function getItem() {
  return apiRequest().then(response => response.json()).catch(e => e);
}

function setItem(item) {
  return apiRequest('POST', { body: item })
    .then(response => response.status)
    .catch(e => e);
}

export function useRemoteContext(context) {
  const remoteContext = getItem();
  return remoteContext || context;
}

export function useRemoteReducer([state, dispatch]) {
  useEffect(() => setItem(JSON.stringify(state)), [state]);
  return [state, dispatch];
}
