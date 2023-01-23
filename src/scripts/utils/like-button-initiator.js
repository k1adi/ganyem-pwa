import FavoriteRestoIdb from '../data/favorite-resto-idb';
import { createLikeButton, createLikedButton } from '../views/ui-component/like-button';

const likeButtonInitiator = {
  async init({ likeButtonWrapper, data }) {
    this._likeButtonWrapper = likeButtonWrapper;
    this._resto = data.restaurant;

    await this._renderButton();
  },

  async _renderButton() {
    const { id } = this._resto;
    if (await this._isRestoExist(id)) {
      this._renderLiked();
    } else {
      this._renderLike();
    }
  },

  async _isRestoExist(id) {
    const resto = await FavoriteRestoIdb.getResto(id);
    return !!resto;
  },

  _renderLiked() {
    this._likeButtonWrapper.innerHTML = createLikedButton();

    const likeButton = document.querySelector('.like-button');
    likeButton.addEventListener('click', async () => {
      await FavoriteRestoIdb.deleteResto(this._resto.id);
      this._renderButton();
    });
  },

  _renderLike() {
    this._likeButtonWrapper.innerHTML = createLikeButton();

    const likeButton = document.querySelector('.like-button');
    likeButton.addEventListener('click', async () => {
      await FavoriteRestoIdb.putResto(this._resto);
      this._renderButton();
    });
  },
};

export default likeButtonInitiator;
