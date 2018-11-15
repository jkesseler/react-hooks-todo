import settings from '../settings';

function apiRequest(method = 'GET', data = {}) {
  return fetch('https://api.jsonbin.io/b/', {
    method,
    mode: 'cors',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
      'secret-key': settings.getJSONBinAPIKey(),
      name: settings.getJSONBinName(),
    },
    body: JSON.stringify(data),
  });
}

class remoteStorage {
  getItem = () => apiRequest().then(response => response.json()).catch(e => e);

  setitem = (item) => {
    apiRequest('POST', item)
      .then(response => response.status)
      .catch(e => e);
  };
}

export default remoteStorage;
