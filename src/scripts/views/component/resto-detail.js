import ImageHelper from '../../utils/image-helpers';
import API_ENDPOINT from '../../global/api-endpoint';
import { createRestoDetailPlaceholder, removeCurrentPlaceholder } from '../ui-component/placeholder';
import './review-wrapper';

class RestoDetail extends HTMLElement {
  set resto(data) {
    this._resto = data;
    this.render();
  }

  connectedCallback() {
    this.innerHTML = createRestoDetailPlaceholder();
  }

  render() {
    // eslint-disable-next-line
    const { pictureId, name, city, address, rating, description, categories, menus, customerReviews } = this._resto;

    removeCurrentPlaceholder(this);
    this.innerHTML = `
      <div class="detail-wrapper__info">
        <div class="detail-card__image">
          <img class="spinner">
          <span class="detail-card__rating">
            <i class="fa-solid fa-star" aria-label="rating"></i> ${rating}
          </span>
        </div>

        <ul class="detail-card__label" aria-label="Category resto">
          ${categories.map((item) => `
            <li>${item.name}</li> 
          `).join('')}
        </ul>

        <h1 class="detail-card__title">${name}</h1>
        <p class="text--muted" aria-label="Address at">
          ${address}, ${city}
        </p>
      </div>

      <div class="detail-wrapper__desc">
        <div class="detail-card__section">
          <h2>Resto Description: </h2>
          <p class="text--muted">${description}</p>
        </div>

        <div class="detail-card__section">
          <h2>Food's</h2>
          <ol class="detail-card__menu" aria-label="Food menu list">
            ${menus.foods.map((item) => `
              <li>${item.name}</li>
            `).join('')}
          </ol>
        </div>

        <div class="detail-card__section">
          <h2>Drink's</h2>
          <ol class="detail-card__menu" aria-label="Drink menu list">
            ${menus.drinks.map((item) => `
              <li>${item.name}</li>
            `).join('')}
          </ol>
        </div>

        <h2>Review's</h2>
        <review-wrapper></review-wrapper>
      </div>
    `;

    const cardImage = this.querySelector('.detail-card__image img');
    const imageHelper = new ImageHelper({
      imgElement: cardImage,
      imgSource: `${API_ENDPOINT.GET_IMG_RESTO('medium')}/${pictureId}`,
      imgAlt: 'Thumbnail Resto',
    });

    imageHelper.asyncLoadImage();

    const reviewWrapper = this.querySelector('review-wrapper');
    reviewWrapper.item = customerReviews;
  }

  renderError(message) {
    removeCurrentPlaceholder(this);
    this.innerHTML = `
      <div class="detail-wrapper__error">
        <h2 class="text--title">Oops...</h2>
        <p>${message}</p>
      </div>
    `;
  }
}

customElements.define('resto-detail', RestoDetail);
