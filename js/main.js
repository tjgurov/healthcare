const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,

  speed: 600,

  pagination: {
    el: '.service__pagination',
    clickable: true
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 28,
    },
    750: {
      slidesPerView: 2,
      spaceBetween: 36,
    },
    1100: {
      slidesPerView: 3,
      spaceBetween: 48,
    },
  }
});

const swiperTest = new Swiper('.testimonials__slider', {
  direction: 'horizontal',
  loop: true,
  height: 391,

  navigation: {
    nextEl: '.testimonials__next',
    prevEl: '.testimonials__prev',
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 32,
    },
    700: {
      slidesPerView: 2,
      spaceBetween: 32,
    },
    1000: {
      slidesPerView: 3,
      spaceBetween: 32,
    },
  }
});



var burgerMenu = document.querySelector('.burger');
var navMenu = document.querySelector('.header__top');
var overlay = document.querySelector('.overlay');

burgerMenu.addEventListener('click', function () {
  burgerMenu.classList.toggle('open');
  navMenu.classList.toggle('open');
  overlay.classList.toggle('show');
});

setInterval(() => {
  if  ($(window).scrollTop() > 0 && $('.header__top').hasClass('header__top--open') === false) {
    $('.burger').addClass('burger--follow')
  }
  else {
    $('.burger').removeClass('burger--follow')
  }
}, 0);
$('.burger, .overlay, .header__top a').on('click' , function(e) {
  e.preventDefault()
  $('.header__top').toggleClass('header__top--open')
  $('.overlay').toggleClass('overlay--show')
  // $('.burger').toggleClass('burger--open')

})

$('.footer__column-title--slide').on('click', function() {
  $(this).next().slideToggle();
})

