import LocalStorageHelper from './local-storage-helpers';

const ToggleThemeInitiator = {
  init({ toggleButton, appBody }) {
    toggleButton.addEventListener('click', (event) => {
      const isBodyLightTheme = appBody.classList.contains('light');
      if (isBodyLightTheme) {
        appBody.setAttribute('class', 'app dark');
        event.target.setAttribute('aria-pressed', true);
        LocalStorageHelper.putTheme('dark');
      } else {
        appBody.setAttribute('class', 'app light');
        event.target.setAttribute('aria-presses', false);
        LocalStorageHelper.putTheme('light');
      }
    });
  },
};

export default ToggleThemeInitiator;
