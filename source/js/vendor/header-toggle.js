document.querySelector('body').classList.remove('nojs');

const header = document.querySelector('.header');
const navToggle = document.querySelector('.header__toggle');

navToggle.addEventListener('click', () => {
  if (!header.classList.contains('header--menu-opened')) {
    header.classList.add('header--menu-opened');
  } else {
    header.classList.remove('header--menu-opened');
  }
});
