import settings from './settings';

jest.mock('process');

describe('settings', () => {
  beforeEach(() => {
    process.env = {
      REACT_APP_LOCAL_STORAGE_KEY: 'my-localstorage-key',
      REACT_APP_JSONBIN_API_KEY: 'my-api-key',
      REACT_APP_JSONBIN_NAME: 'my-bin-name',
    };
  });

  it('should throw an error if the environment variable is not set', () => {
    delete process.env.REACT_APP_LOCAL_STORAGE_KEY;
    try {
      settings.getLocalStorageKey();
      expect(false).toBe(true);
    } catch (err) {
      expect(err).not.toBeNull();
      expect(err.message).toContain('Environment variable REACT_APP_LOCAL_STORAGE_KEY not defined');
    }
  });

  it('should return a default value if that is set', () => {
    delete process.env.REACT_APP_LOCAL_STORAGE_KEY;
    expect(settings.getApplicationName()).toBe('react-hooks-todo');
  });

  it('should get the local storage key', () => {
    expect(settings.getCookieDomain()).toBe(process.env.REACT_APP_LOCAL_STORAGE_KEY);
  });

  it('should get the JSONBin API key', () => {
    expect(settings.getCookieDomain()).toBe(process.env.REACT_APP_JSONBIN_API_KEY);
  });

  it('should get the JSONBin binname', () => {
    expect(settings.getCookieDomain()).toBe(process.env.REACT_APP_JSONBIN_NAME);
  });
});
