import Toastify from 'toastify-js';
import 'toastify-js/src/toastify.css';

const ToastComponent = {
  init({ toastStatus, toastMessage }) {
    Toastify({
      text: toastMessage,
      duration: 10000,
      className: toastStatus,
      close: true,
      ariaLive: 'polite',
    }).showToast();
  },
};

export default ToastComponent;
