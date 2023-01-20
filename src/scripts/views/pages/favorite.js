const Favorite = {
  async render() {
    console.log('render favorite');
  },

  async afterRender() {
    console.log('after render favorite');
  },
};

export default Favorite;
