import '../component/app-banner';
import '../component/resto-wrapper';

import FavoriteRestoIdb from '../../data/favorite-resto-idb';

const Favorite = {
  async render() {
    return `
      <app-banner data-title="Favorite Restaurant's" data-title-align="text-center" class="banner banner--favorite"></app-banner>

      <section class="container--wrap container--padding-y"  id="mainContent">
        <resto-wrapper class="card-wrapper--resto margin-top-none"></resto-wrapper>
      </section>
    `;
  },

  async afterRender() {
    const restoWrapper = document.querySelector('resto-wrapper');
    const restos = await FavoriteRestoIdb.getAllResto();

    if (restos.length) {
      restoWrapper.restoList = restos;
    } else {
      restoWrapper.renderError('Your Favorite Restaurant List is Empty');
    }
  },
};

export default Favorite;
