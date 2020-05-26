// namespacing object
const app = {};

app.mobileMenu = $('.mobNav');

// init
app.init = () => {
  $('.hamburger').on('click', app.toggleMenu)
  $('.mobItem').on('click', app.closeMenu)
}

// toggle mobile menu=
app.toggleMenu = () => {
  $('.hamburger').toggleClass('hamburger--collapse is-active');
  $(app.mobileMenu).slideToggle()
};

app.closeMenu = () => {
  $('.hamburger').removeClass('hamburger--collapse is-active')
  $(app.mobileMenu).hide()
};

// doc ready
$(function () {
  app.init();
});