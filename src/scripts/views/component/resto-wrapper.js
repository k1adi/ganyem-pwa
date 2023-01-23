import { createRestoPlaceholder, removeCurrentPlaceholder } from '../ui-component/placeholder';
import './card-resto';

class RestoWrapper extends HTMLElement {
  set restoList(data) {
    this._restoList = data;
    this.render();
  }

  connectedCallback() {
    this.innerHTML = createRestoPlaceholder();
  }

  render() {
    removeCurrentPlaceholder(this);
    this._restoList.forEach((data) => {
      const cardResto = document.createElement('card-resto');
      cardResto.setAttribute('class', 'card--resto');
      cardResto.item = data;
      this.appendChild(cardResto);
    });
  }

  renderError(message) {
    removeCurrentPlaceholder(this);
    this.innerHTML = `
      <div class="card--resto__error">
        <h2 class="text--title">Oops...</h2>
        <p>${message}</p>
      </div>
    `;
  }
}

customElements.define('resto-wrapper', RestoWrapper);
