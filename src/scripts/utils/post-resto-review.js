import RestoSource from '../data/resto-source-api';
import ToastComponent from '../views/ui-component/toast';
import '../views/component/review-wrapper';

const PostRestoReview = {
  init({ formReview }) {
    formReview.addEventListener('submit', async (event) => {
      event.preventDefault();
      try {
        const formData = new FormData(event.target);
        const reviewWrapper = document.querySelector('review-wrapper');
        /**
         * Souce code
         * https://stackoverflow.com/questions/41431322/how-to-convert-formdata-html5-object-to-json
        */
        const formObject = Array.from(formData.entries()).reduce((data, [key, value]) => ({
          ...data,
          [key]: value,
        }), {});
        const result = await RestoSource.postRestoReview(formObject);
        reviewWrapper.item = result.customerReviews;

        ToastComponent.init({
          toastStatus: 'toastify--success',
          toastMessage: 'Review sent successfully',
        });

        event.target.reset();
      } catch (err) {
        console.error(err);
        ToastComponent.init({
          toastStatus: 'toastify--failed',
          toastMessage: 'Review failed to submit',
        });
      }
    });
  },
};

export default PostRestoReview;
