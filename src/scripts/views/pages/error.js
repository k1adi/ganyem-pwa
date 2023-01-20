const ErrorPage = {
  async render() {
    console.log('render error');
  },

  async afterRender() {
    console.log('after render error');
  },
};

export default ErrorPage;
