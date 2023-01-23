class HeaderNav {
  // eslint-disable-next-line object-curly-newline
  constructor({ navList, navToggle, navToggleBtn, navToggleLabel }) {
    this._navItem = '';
    this._navList = navList;
    this._navToggle = navToggle;
    this._navToggleBtn = navToggleBtn;
    this._navToggleLabel = navToggleLabel;
    this._maxTabletScreen = 767;

    this._navItemList();
  }

  _navItemList() {
    const navItem = [
      { text: 'Home', url: '/#' },
      { text: 'Restaurants', url: '/#/restaurants' },
      { text: 'Favorite', url: '/#/favorite' },
      { text: 'About Us', url: 'https://www.linkedin.com/in/kiadi/', target: '_blank' },
    ];

    this._navItem = navItem.map((item) => `
      <li class="nav__list__item">
        <a href="${item.url}" ${item?.target ? 'target="_blank"' : ''}>${item.text}</a>
      </li>
    `).join('');
  }

  _handleNavMobile(event) {
    event.stopPropagation();
    const navWrapper = this.parentNode.parentNode;
    const navToggle = navWrapper.querySelector('.nav__toggle');
    navToggle.click();
  }

  _showNavItem() {
    this._navList.insertAdjacentHTML('afterbegin', this._navItem);

    const navListItem = this._navList.querySelectorAll('.nav__list__item');
    navListItem.forEach((element) => {
      if (window.screen.width < this._maxTabletScreen) {
        element.addEventListener('click', this._handleNavMobile);
      } else {
        element.removeEventListener('click', this._handleNavMobile);
      }
    });
  }

  _removeNavItem() {
    while (this._navList.firstChild) {
      this._navList.removeChild(this._navList.firstChild);
    }
  }

  _showNavigation() {
    this._removeNavItem();
    this._navList.classList.add('active');
    this._navToggleBtn.classList.add('active');
    this._navToggle.setAttribute('aria-expanded', false);
    this._navToggleLabel.innerHTML = 'Close Navigation';
    this._showNavItem();
  }

  _closeNavigation() {
    this._navList.classList.remove('active');
    this._navToggleBtn.classList.remove('active');
    this._navToggle.setAttribute('aria-expanded', true);
    this._navToggleLabel.innerHTML = 'Open Navigation';
    this._removeNavItem();
  }

  _handleTrapFocus(event) {
    const focusableElem = this.querySelectorAll('.nav__list [href]:not([disabled])');
    const firstFocusableElem = this.querySelector('.nav__toggle');
    const lastFocusableElem = focusableElem[focusableElem.length - 1];

    const tabKey = event.key === 'Tab';
    if (!tabKey) {
      return;
    }

    const checkActiveElement = (elementActivated, nextElement) => {
      if (document.activeElement === elementActivated) {
        nextElement.focus();
        event.preventDefault();
      }
    };

    if (event.shiftKey) {
      checkActiveElement(firstFocusableElem, lastFocusableElem);
    } else {
      checkActiveElement(lastFocusableElem, firstFocusableElem);
    }
  }

  _activeTrapFocus() {
    document.addEventListener('keydown', this._handleTrapFocus);
  }

  _leaveTrapFocus() {
    document.removeEventListener('keydown', this._handleTrapFocus);
  }

  init() {
    if (window.screen.width > this._maxTabletScreen) {
      this._navToggle.setAttribute('tabindex', '-1');
      this._showNavItem();
    }

    window.addEventListener('resize', (event) => {
      const currentScreenWidth = event.currentTarget.screen.width;
      if (currentScreenWidth > this._maxTabletScreen) {
        this._navToggle.setAttribute('tabindex', '-1');
        if (!this._navList.hasChildNodes()) {
          this._showNavItem();
        }
      } else {
        this._closeNavigation();
        this._navToggle.removeAttribute('tabindex');
      }
    });

    this._navToggle.addEventListener('click', () => {
      const isToggleBtnActive = this._navToggleBtn.classList.contains('active');

      if (isToggleBtnActive) {
        this._closeNavigation();
        this._leaveTrapFocus();
      } else {
        this._showNavigation();
        this._activeTrapFocus();
      }
    });
  }
}

export default HeaderNav;
