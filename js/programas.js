
$(document).ready(function () {
  (function ($) {
    $('.selecion-programa').on('click', () => {
      $('#programa-seleccionado-id').css('display', 'block');
      $('#slider-programas-id').css('display', 'none');
    })

    // slider
    $('.owl-carousel').owlCarousel({
      loop: true,
      lazyLoad: true,
      margin: 0,
      responsiveClass: true,
      autoplay: true,
      autoplayTimeout: 3000,
      autoplayHoverPause: false,
      nav: true,
      dots: false,
      responsive: {
        0: {
          items: 1,
          loop: true
        },
        600: {
          items: 3,
          loop: true
        },
        1000: {
          items: 5,
          loop: true
        }
      }
    })
  })(jQuery);
});