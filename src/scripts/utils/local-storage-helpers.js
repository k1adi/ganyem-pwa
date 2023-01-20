import CONFIG from '../global/config';

const { LOCAL_STORAGE_THEME } = CONFIG;

const LocalStorageHelper = {
  checkLocalStorage() {
    if (typeof (Storage) !== 'undefined') {
      console.error('Browser does not support local storage');
      return false;
    }

    return true;
  },

  putTheme(theme) {
    if (this.checkLocalStorage) {
      localStorage.setItem(LOCAL_STORAGE_THEME, theme);
    }
  },

  getTheme() {
    if (localStorage.getItem(LOCAL_STORAGE_THEME) === null) {
      this.putTheme('light');
    }

    return localStorage.getItem(LOCAL_STORAGE_THEME);
  },
};

export default LocalStorageHelper;
