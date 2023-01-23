import Swiper, { Pagination, A11y } from 'swiper';
// eslint-disable-next-line
import 'swiper/css';
// eslint-disable-next-line
import 'swiper/css/pagination';

class ReviewWrapper extends HTMLElement {
  set item(data) {
    this._review = data;
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="swiper" id="swiper-review">
        <div class="swiper-wrapper"></div> 

        <!-- Pagination -->
        <div class="swiper-pagination"></div>
      </div>
    `;

    const swiperWrapper = this.querySelector('.swiper-wrapper');
    this._review.forEach((data) => {
      swiperWrapper.insertAdjacentHTML('beforeend', `
        <div class="swiper-slide">
          <div class="swiper--review">
            <div class="swiper--review__resto">
              ${(data?.restaurant) ? `
                <span class="swiper--review__resto-name">${data.restaurant}</span>
              ` : ''}
              ${(data?.rating) ? `
              <span class="card__rating">
                <i class="fa-solid fa-star"></i> ${data?.rating}
              </span>
              ` : ''}
            </div>
            <p class="swiper--review__text">${data.review}</p>
            <div class="swiper--review__profile">
              <img src="https://cdn-icons-png.flaticon.com/512/847/847969.png" alt="User profile">
              <span>
                <p>${data.name}</p>
                ${(data?.date) ? `
                  <small>${data.date}</small>
                ` : ''}
              </span>
            </div>
          </div>
        </div>
      `);
    });

    const reviewSwiper = new Swiper('#swiper-review', {
      modules: [Pagination, A11y],
      runCallbacksOnInit: false,
      watchSlidesProgress: true,
      slidesPerView: 1,
      spaceBetween: 10,
      breakpoints: {
        612: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
      },
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
      },
      a11y: {
        containerMessage: 'Customer Review Sliders',
        firstSlideMessage: 'This is the first review',
        lastSlideMessage: 'This is the last review',
        paginationBulletMessage: 'Go to slide {{index}} review',
        notificationClass: 'visual-hidden',
      },
      on: {
        init: (swiper) => {
          const swiperSlides = swiper.el.querySelectorAll('.swiper-slide');
          const swiperSlideVisibles = swiper.el.querySelectorAll('.swiper-slide-visible');
          const focusablesElem = swiper.el.querySelectorAll('a[href]:not([disabled])');

          swiperSlides.forEach((slider) => {
            slider.setAttribute('aria-hidden', true);
          });

          swiperSlideVisibles.forEach((slider) => {
            slider.setAttribute('aria-hidden', false);
          });

          // Remove native focus element on invisible slider
          focusablesElem.forEach((elem) => {
            const elemSlideWrapper = elem.parentNode.closest('.swiper-slide');
            const elemSlideWrapperIsVisible = elemSlideWrapper.classList.contains('swiper-slide-visible');

            if (!elemSlideWrapperIsVisible) {
              elem.setAttribute('tabindex', '-1');
            }
          });
        },
      },
    });

    reviewSwiper.on('slideChange', (swiper) => {
      const swiperSlides = swiper.el.querySelectorAll('.swiper-slide');
      const focusablesElem = swiper.el.querySelectorAll('a[href]:not([disabled])');

      swiperSlides.forEach((slider) => {
        slider.setAttribute('aria-hidden', true);
      });

      focusablesElem.forEach((elem) => {
        elem.setAttribute('tabindex', '-1');
      });

      // Add trigger function after slider changes
      setTimeout(() => {
        const swiperSlideVisibles = swiper.el.querySelectorAll('.swiper-slide-visible');

        swiperSlideVisibles.forEach((slider) => {
          slider.setAttribute('aria-hidden', false);
        });
        // Loop focusable element
        focusablesElem.forEach((elem) => {
          const elemSlideWrapper = elem.parentNode.closest('.swiper-slide');
          const elemSlideWrapperIsVisible = elemSlideWrapper.classList.contains('swiper-slide-visible');
          if (!elemSlideWrapperIsVisible) {
            elem.setAttribute('tabindex', '-1');
          } else {
            elem.removeAttribute('tabindex');
          }
        });
      }, 0);
    });
  }
}

customElements.define('review-wrapper', ReviewWrapper);
