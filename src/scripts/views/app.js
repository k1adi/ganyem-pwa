import HeaderNav from '../utils/header-nav';
import ToggleThemeInitiator from '../utils/toggle-theme-initiator';
import LocalStorageHelper from '../utils/local-storage-helpers';
import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';

class App {
  // eslint-disable-next-line
  constructor({ appBody, skipButton, themeButton, navToggle, navToggleBtn, navToggleLabel, navList, mainContent }) {
    this._appBody = appBody;
    this._skipButton = skipButton;
    this._themeButton = themeButton;
    this._navToggle = navToggle;
    this._navToggleBtn = navToggleBtn;
    this._navToggleLabel = navToggleLabel;
    this._navList = navList;
    this._mainContent = mainContent;

    this._initialAppShell();
  }

  _initialAppShell() {
    this._initialNavMobile();
    this._initialToggleTheme();
    this._skipToMainContent();

    if (LocalStorageHelper.checkLocalStorage) {
      this._setTheme();
    }
  }

  _initialNavMobile() {
    const headerNav = new HeaderNav({
      navList: this._navList,
      navToggle: this._navToggle,
      navToggleBtn: this._navToggleBtn,
      navToggleLabel: this._navToggleLabel,
    });

    headerNav.init();
  }

  _initialToggleTheme() {
    ToggleThemeInitiator.init({
      toggleButton: this._themeButton,
      appBody: this._appBody,
    });
  }

  _skipToMainContent() {
    this._skipButton.addEventListener('click', (event) => {
      event.preventDefault();
      const elemTarget = document.querySelector('#mainContent');
      elemTarget.tabIndex = 0;
      elemTarget.focus();
    });
  }

  _setTheme() {
    const currentTheme = LocalStorageHelper.getTheme();
    this._appBody.setAttribute('class', `app ${currentTheme}`);
  }

  async renderPage() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = (routes[url] !== undefined) ? routes[url] : routes['/not-found'];
    this._mainContent.innerHTML = await page.render();
    await page.afterRender();
  }
}

export default App;
