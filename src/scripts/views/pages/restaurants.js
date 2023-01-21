import '../component/app-banner';
import '../component/resto-wrapper';

import RestoSource from '../../data/resto-source-api';

const Restaurants = {
  async render() {
    return `
      <app-banner data-title="Restaurants" data-title-align="text-center" class="banner banner--resto"></app-banner>
      <section class="container--wrap container--padding-y" id="resto">
        <resto-wrapper class="card-wrapper--resto"></resto-wrapper>
      </section>
    `;
  },

  async afterRender() {
    const restoWrapper = document.querySelector('resto-wrapper');
    try {
      const getResto = await RestoSource.getAllResto();
      restoWrapper.restoList = getResto.restaurants;
    } catch (err) {
      console.log(err);
    }
  },
};

export default Restaurants;
