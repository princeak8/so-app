const STORAGE_KEY = 'obiex.storage';
const sessionString = localStorage.getItem(STORAGE_KEY);

const storage = {
  checkAccessTokenValidity() {
    // sessionString will be "undefined" if the browser history is cleared
    const sessionExists = sessionString && sessionString !== 'undefined';
    if (sessionExists) {
      const sessionObject = this.loadSessionInfo(sessionString);
      // Multiplying by 1000 converts to milliseconds
      const expiresAt = new Date(sessionObject.auth.expiresIn * 1000).getTime();
      const currentTime = Date.now();

      return currentTime < expiresAt;
    }

    return false;
  },
  loadSessionInfo() {
    return JSON.parse(sessionString);
  },
  saveSessionInfo(info) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(info));
  },
  removeSessionInfo() {
    localStorage.removeItem(STORAGE_KEY);
  },
};

export default storage;
