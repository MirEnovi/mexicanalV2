

$(document).ready(function () {
  (function ($) {
    $('.owl-carousel').owlCarousel({
      loop: true,
      lazyLoad: true,
      margin: 10,
      responsiveClass: true,
      autoplay: true,
      autoplayTimeout: 3000,
      autoplayHoverPause: false,
      responsive: {
        0: {
          items: 1,
          nav: false,
          loop: true
        },
        600: {
          items: 3,
          nav: false,
          loop: true
        },
        1000: {
          items: 5,
          nav: false,
          loop: true
        }
      }
    })
  })(jQuery);
});