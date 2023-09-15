const heroSwiper = document.querySelector('.hero__intro-swiper');
const toursSwiper = document.querySelector('.tours__swiper');
const trainingSwiper = document.querySelector('.training__swiper');
const reviewsSwiper = document.querySelector('.reviews__swiper');
const gallerySwiper = document.querySelector('.gallery__swiper');
const advantagesSwiper = document.querySelector('.advantages__swiper');

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
          spaceBetween: 17,
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

const initReviewsSwiper = () => {
  if (reviewsSwiper) {
    const swiper = new Swiper(reviewsSwiper, {

      simulateTouch: false,
      navigation: {
        nextEl: '.reviews__button--next',
        prevEl: '.reviews__button--prev',
      },

      breakpoints: {
        320: {
          slidesPerView: 1,
        },

        768: {
          slidesPerView: 1.3,
          spaceBetween: 0,
        },

        1200: {
          slidesPerView: 1.6,
          spaceBetween: 0,
        },
      }
    });
  }
};

const initAdvantagesSwiper = () => {
  const swiper = new Swiper(advantagesSwiper, {

    loop: true,
    freeMode: true,
    slidesPerView: 'auto',
    initialSlide: 1,
    centeredSlides: true,
    watchOverflow: true,
    spaceBetween: 30,
    navigation: {
      nextEl: '.advantages__button--next',
      prevEl: '.advantages__button--prev',
    }
  });
}

const initGallerySwiper = () => {
  if (gallerySwiper) {
    const swiper = new Swiper(gallerySwiper, {

      simulateTouch: false,
      slidesPerView: 'auto',
      navigation: {
        nextEl: '.gallery__button--next',
        prevEl: '.gallery__button--prev',
      },

      breakpoints: {
        320: {
          spaceBetween: 2,
        },

        768: {
          spaceBetween: 5,
        },

        1200: {
          spaceBetween: 5,
        },
      },
    });
  }
};

export { initHeroSwiper, initToursSwiper, initTrainingSwiper, initReviewsSwiper, initGallerySwiper, initAdvantagesSwiper };
