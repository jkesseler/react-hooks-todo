import settings from '../settings';

function apiRequest(method = 'GET', data) {
  const endpoint = `${settings.getJSONBinApiUri()}${settings.getJSONBinID()}`;

  const fetchConfig = {
    method,
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
      'secret-key': settings.getJSONBinAPIKey(),
      name: settings.getJSONBinName(),
      versioning: false,
    },
  };

  if (data) {
    fetchConfig.body = JSON.stringify(data);
  }

  return fetch(endpoint, fetchConfig);
}

async function getRemote() {
  const state = apiRequest().then(response => response.json()).catch(e => e);
  return state;
}

async function setRemote(item) {
  return apiRequest('PUT', { body: item })
    .then(response => response.status)
    .catch(e => e);
}


export {
  getRemote,
  setRemote,
};
