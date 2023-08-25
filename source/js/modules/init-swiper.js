const heroSwiper = document.querySelector('.swiper');

/* eslint-disable */
const initSwiper = () => {
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

export { initSwiper };
