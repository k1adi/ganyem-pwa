import 'regenerator-runtime';
import '../styles/main.scss';

import App from './views/app';
import swRegister from './utils/sw-register';

// Components
import './views/component/app-navbar';
import './views/component/app-footer';

const app = new App({
  appBody: document.querySelector('body'),
  skipButton: document.querySelector('#skip-to-content'),
  themeButton: document.querySelector('.toggle-theme'),
  navToggle: document.querySelector('.nav__toggle'),
  navToggleBtn: document.querySelector('.nav__toggle-btn'),
  navToggleLabel: document.querySelector('#toggleLabel'),
  navList: document.querySelector('.nav__list'),
  mainContent: document.querySelector('.app__content'),
});

window.addEventListener('hashchange', async () => {
  await app.renderPage();
});

window.addEventListener('DOMContentLoaded', async () => {
  await app.renderPage();
  await swRegister();
});
