// namespacing object
const app = {};

app.mobileMenu = $('.mobNav');

// init
app.init = () => {
  console.log('hi')
  $('.hamburger').on('click', app.toggleMenu)
  $('.mobItem').on('click', app.closeMenu)
}

// toggle mobile menu
app.toggleMenu = () => {
  $('.hamburger').toggleClass('hamburger--collapse is-active');
  // $('.hamburger').toggleClass('hidden');
  $(app.mobileMenu).slideToggle()
};

app.closeMenu = () => {
  console.log('hi');
  $('.hamburger').removeClass('hamburger--collapse is-active')
  $(app.mobileMenu).hide()
};


// doc ready
$(function () {
  app.init();
});