const heroSwiper = document.querySelector('.hero__intro-swiper');
const toursSwiper = document.querySelector('.tours__container-swiper');
const trainingSwiper = document.querySelector('.training__swiper');

/* eslint-disable */
const initHeroSwiper = () => {
  if (heroSwiper) {
    const swiper = new Swiper(heroSwiper, {
      pagination: {
        el: '.pagination-swiper',
        clickable: true,
      },

      simulateTouch: false,

    });
  }
};

const initToursSwiper = () => {
  if (toursSwiper) {
    const swiper = new Swiper(toursSwiper, {

      simulateTouch: false,
      navigation: {
        nextEl: '.tours__button--next',
        prevEl: '.tours__button--prev',
      },

      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 48,
        },

        768: {
          slidesPerView: 2,
          spaceBetween: 18,
        },

        1200: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      }
    });
  }
};

const initTrainingSwiper = () => {
  if (trainingSwiper) {
    const swiper = new Swiper(trainingSwiper, {

      simulateTouch: false,
      navigation: {
        nextEl: '.training__button--next',
        prevEl: '.training__button--prev',
      },

      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 48,
        },

        768: {
          slidesPerView: 3,
          spaceBetween: 0,
        },

        1200: {
          slidesPerView: 4,
          spaceBetween: 0,
        },
      }
    });
  }
};

export { initHeroSwiper, initToursSwiper, initTrainingSwiper };
