import Swiper, { Navigation, Scrollbar } from 'swiper';

Swiper.use([Navigation, Scrollbar]);

const swiper = new Swiper('.customers__content', {
  slidesPerView: 'auto',
  spaceBetween: 40,
  scrollbar: {
    el: '.customers__scroll',
    draggable: true,
  },
  navigation: {
    nextEl: '.customers__slider-btn--next',
    prevEl: '.customers__slider-btn--prev',
  },
});
