import '../component/app-banner';

const Favorite = {
  async render() {
    return `
      <app-banner data-title="Favorite Resto's" data-title-align="text-center" class="banner banner--favorite"></app-banner>
    `;
  },

  async afterRender() {
    console.log('after render favorite');
  },
};

export default Favorite;
