
const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,
  slidesPerView: 3,
  spaceBetween: 48,
  centeredSlides: true,
  speed: 600,

  pagination: {
    el: '.service__pagination',
    clickable: true
  }
});

const swiperTest = new Swiper('.testimonials__slider', {
  direction: 'horizontal',
  loop: true,
  slidesPerView: 3,
  spaceBetween: 32,

  navigation: {
    nextEl: '.testimonials__next',
    prevEl: '.testimonials__prev',
  },
});