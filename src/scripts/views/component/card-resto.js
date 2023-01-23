import ImageHelper from '../../utils/image-helpers';
import API_ENDPOINT from '../../global/api-endpoint';

class CardResto extends HTMLElement {
  set item(data) {
    this._resto = data;
    this.render();
  }

  render() {
    // eslint-disable-next-line object-curly-newline
    const { id, name, description, city, rating, pictureId } = this._resto;

    this.innerHTML = `
      <div class="card--resto__image">
        <img class="spinner">
        <span class="card--resto__label" aria-label="Location resto at ${city}">${city}</span>
      </div>
      <div class="card--resto__body">
        <h3 class="card--resto__title">${name}</h3>
        <span class="card__rating">
          <i class="fa-solid fa-star" aria-label="rating"></i> ${rating}
        </span>
        <p class="card--resto__desc">${description.substring(0, 120)}</p>
        <div class="card__link">
          <a href="#/detail/${id}" aria-label="See ${name} Resto">See Resto</a>
        </div>
      </div>
    `;

    const cardImage = this.querySelector('.card--resto__image img');
    const imageHelper = new ImageHelper({
      imgElement: cardImage,
      imgSource: `${API_ENDPOINT.GET_IMG_RESTO('medium')}/${pictureId}`,
      imgAlt: 'Thumbnail Resto',
    });

    imageHelper.asyncLoadImage();
  }
}

customElements.define('card-resto', CardResto);
