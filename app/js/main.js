$(document).ready(function() {
    $('.header__burger').click(function(event) {
        $('.header__menu,.header__menu-dark').addClass('active');
        $('body').addClass('scroll');
    });
    $('.header__logo').click(function(event) {
        $('.header__menu,.header__menu-dark').removeClass('active');
        $('body').removeClass('scroll');
    });
    $('.header__cross').click(function(event) {
        $('.header__menu,.header__menu-dark').removeClass('active');
        $('body').removeClass('scroll');
    });
    $('.header__menu-link').click(function(event) {
        $('.header__menu,.header__menu-dark').removeClass('active');
        $('body').removeClass('scroll');
    });
    $('.header__button-second').click(function(event) {
        $('.header__menu,.header__menu-dark').removeClass('active');
        $('body').removeClass('scroll');
    });
    $('.header__menu-dark').click(function(event) {
        $('.header__menu,.header__menu-dark').removeClass('active');
        $('body').removeClass('scroll');
    });
});

document.addEventListener('DOMContentLoaded', () => {

    const onScrollHeader = () => {
  
      const header = document.querySelector('.header');
  
      let prevScroll = window.pageYOffset;
      let currentScroll;
  
      window.addEventListener('scroll', () => {
  
        currentScroll = window.pageYOffset;
  
        const headerHidden = () => header.classList.contains('header_hidden');
  
        if (currentScroll > prevScroll && !headerHidden()) {
          header.classList.add('header_hidden');
        }
        if (currentScroll < prevScroll && headerHidden()) {
          header.classList.remove('header_hidden');
        }
  
        prevScroll = currentScroll;
  
      });
  
    };
  
onScrollHeader();
});