
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