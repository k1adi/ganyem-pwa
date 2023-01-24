import '../component/resto-detail';

import UrlParser from '../../routes/url-parser';
import RestoSource from '../../data/resto-source-api';
import likeButtonInitiator from '../../utils/like-button-initiator';

const Detail = {
  async render() {
    return `
      <app-banner data-title="Restaurants" data-title-align="text-center" class="banner banner--resto"></app-banner>

      <section class="container--wrap container--padding-y" id="mainContent">
        <resto-detail class="detail-wrapper"></resto-detail>
      </section>

      <div class="detail-like-button"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restoDetailWrapper = document.querySelector('resto-detail');
    const likeButtonWrapper = document.querySelector('.detail-like-button');

    try {
      const getData = await RestoSource.getDetailResto(url.id);
      restoDetailWrapper.resto = getData.restaurant;

      likeButtonInitiator.init({
        likeButtonWrapper,
        data: getData,
      });
    } catch (err) {
      console.error(err);
      likeButtonInitiator.innerHTML = '';
      restoDetailWrapper.renderError('Failed to Fetch Restaurant Detail');
    }
  },
};

export default Detail;
