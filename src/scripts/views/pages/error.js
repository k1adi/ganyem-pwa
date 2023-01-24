import notFoundImag from '../../../images/not-found.svg';

const ErrorPage = {
  async render() {
    return `
      <div class="error-wrapper" id="mainContent">
        <div class="error-content">
          <img src="${notFoundImag}" alt="">
          <h1>Oops...</h1>
          <p class="text--muted">Page is not found</p>
          <a href="/#">Back to Home</a>
        </div>
      </div>
    `;
  },

  async afterRender() {
    console.error('Oops, page is not found');
  },
};

export default ErrorPage;
