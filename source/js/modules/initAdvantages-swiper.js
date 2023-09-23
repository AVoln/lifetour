import Swiper from '../vendor/swiper';

const matchMedia = window.matchMedia('(min-width:1200px)');
let advantagesSwiper;

const initAdvantagesSwiper = () => {
  advantagesSwiper = new Swiper('.advantages__swiper', {

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
    },
  });
};

const breakpointChecker = () => {
  if (!matchMedia.matches) {
    if (advantagesSwiper) {
      advantagesSwiper.destroy(true, true);
    }

    return;
  }

  initAdvantagesSwiper();
};

matchMedia.addListener(breakpointChecker);
breakpointChecker();
