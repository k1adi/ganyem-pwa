import navLogo from '../../../images/ganyem-logo.png';

class AppNavbar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <button class="toggle-theme" aria-pressed="false">
        <i class="fa-solid fa-circle-half-stroke toggle-theme__icon"></i>
        <span class="toggle-theme__text">Toggle High Contrast</span>
      </button>
      <nav class="nav">
        <a href="/#" class="nav__logo">
          <img src="${navLogo}" alt="Ganyem">
        </a>

        <button class="nav__toggle" aria-expanded="false" aria-haspopup="true" aria-describedby="Open Navigation" aria-controls="navList">
          <div class="nav__toggle-btn">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <span class="visually-hidden hide-text" id="toggleLabel">Show Navigation</span>
        </button>

        <ul class="nav__list" id="navList">
        </ul>
      </nav>
    `;
  }
}

customElements.define('app-navbar', AppNavbar);
