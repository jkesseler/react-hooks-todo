/* eslint-disable class-methods-use-this */
function requireEnvVar(varName, defaultValue) {
  const result = process.env[varName] || defaultValue;
  if (result === undefined) {
    throw new Error(`Environment variable ${varName} not defined\n${JSON.stringify(process.env, null, '')}`);
  }
  return result;
}

class Settings {
  getLocalStorageKey() {
    return requireEnvVar('REACT_APP_LOCAL_STORAGE_KEY', 'react-hooks-todo');
  }

  getJSONBinApiUri() {
    // BUG: only part of the key string is loaded in
    return requireEnvVar('REACT_APP_JSONBIN_API_URI');
  }


  getJSONBinAPIKey() {
    // BUG: only part of the key string is loaded in
    return requireEnvVar('REACT_APP_JSONBIN_API_KEY');
  }

  getJSONBinName() {
    return requireEnvVar('REACT_APP_JSONBIN_NAME');
  }

  getJSONBinID() {
    return requireEnvVar('REACT_APP_JSONBIN_ID');
  }
}

export default new Settings();
