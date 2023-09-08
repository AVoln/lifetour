const advantagesSwiper = document.querySelector('.advantages__swiper');

document.addEventListener('DOMContentLoaded', () => {
  const width = window.innerWidth;

/* eslint-disable */
  if (width > 1200) {
    const swiper = new Swiper(advantagesSwiper, {

      loop: true,
      freeMode: true,
      slidesPerView: 'auto',
      spaceBetween: 30,
      centeredSlides: true,
      navigation: {
        nextEl: '.advantages__button--next',
        prevEl: '.advantages__button--prev',
      }
    });
  }
});
