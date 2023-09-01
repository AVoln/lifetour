import '../utils/scroll-lock';

const header = document.querySelector('.header');
const navToggle = header.querySelector('.header__toggle');
const menu = header.querySelector('.menu');

document.querySelector('body').classList.remove('nojs');

const onNavOutsideClick = (evt) => {
  if (!evt.target.closest('.menu__list')) {
    closeMenu();
  }
};

const onNaVLinkCloseMenu = (evt) => {
  if (!evt.target.closest('.menu__item')) {
    return;
  }
  closeMenu();
};

const closeMenu = () => {
  header.classList.remove('header--menu-opened');
  window.scrollLock.enableScrolling();
  menu.removeEventListener('click', onNaVLinkCloseMenu);
  menu.removeEventListener('click', onNavOutsideClick);
  navToggle.removeEventListener('click', closeMenu);
};

const openMenu = () => {
  if (!navToggle) {
    return;
  }
  header.classList.add('header--menu-opened');
  window.scrollLock.disableScrolling();
  menu.addEventListener('click', onNaVLinkCloseMenu);
  menu.addEventListener('click', onNavOutsideClick);
  navToggle.addEventListener('click', closeMenu);
};

navToggle.addEventListener('click', openMenu);
