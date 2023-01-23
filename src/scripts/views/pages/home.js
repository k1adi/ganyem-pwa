import '../component/app-banner';
import '../component/resto-wrapper';
import '../component/review-wrapper';

import review from '../../data/user-review-dummy.json';
import RestoSource from '../../data/resto-source-api';

const Home = {
  async render() {
    const howToOrderList = [
      {
        icon: 'fa-solid fa-shop',
        title: 'Find Resto',
        desc: 'Choose nearest restaurant to you or choose the best rating restaurant in town.',
      },
      {
        icon: 'fa-solid fa-basket-shopping',
        title: 'Select menu',
        desc: 'Select the food or drink menu you want from the restaurant that you have chosen before.',
      },
      {
        icon: 'fa-solid fa-cash-register',
        title: 'Checkout Order',
        desc: 'Pay for the order you have chosen by cash and non-cash to be ready processing.',
      },
      {
        icon: 'fa-solid fa-clock-rotate-left',
        title: 'Wait for Serve',
        desc: 'So from here the resto ready to prepare your menu for delivery or self-pickup.',
      },
    ];

    return `
      <app-banner data-title="Find Any Foods or Restaurants at Ganyem" data-cta="true" data-cta-text="Find Resto" class="banner banner--home"></app-banner>

      <section class="container--wrap container--padding-y" id="mainContent">
        <h2 class="text--title text--align-center">Find The Best Resto</h2>
        <resto-wrapper class="card-wrapper--resto"></resto-wrapper>
      </section>

      <section class="container--full container--padding-y bg--primary">
        <div class="container--wrap">
          <h2 class="text--title text--dark">How To Order</h2>
          <ol class="card-wrapper--order">
            ${howToOrderList.map((item, index) => `
              <li class="card--order">
                <span class="card--order__label">${index + 1}</span>
                <i class="${item.icon} card--order__icon"></i>
                <h3 class="card--order__title">${item.title}</h3>
                <p class="card--order__desc">${item.desc}</p>
              </li>
            `).join('')}
          </ol>
        </div>
      </section>

      <section class="container--wrap container--padding-y">
        <h2 class="text--title text--align-center">Customer Review's</h2>
        <review-wrapper></review-wrapper>
      </section>
    `;
  },

  async afterRender() {
    // Resto Section
    const restoWrapper = document.querySelector('resto-wrapper');
    try {
      const getResto = await RestoSource.getAllResto();
      const bestResto = getResto.restaurants.filter((data) => data.rating > 4.5);
      restoWrapper.restoList = bestResto.slice(0, 6);
      restoWrapper.insertAdjacentHTML('beforeend', `
        <div class="card--resto__button">
          <a href="/#/restaurants" class="btn btn--primary">See all Resto</a>
        </div>
      `);
    } catch (err) {
      console.error(err);
      restoWrapper.renderError('Failed to Fetch Restaurant Data');
    }

    // Review Section
    const reviewWrapper = document.querySelector('review-wrapper');
    reviewWrapper.item = review.reviews;
  },
};

export default Home;
