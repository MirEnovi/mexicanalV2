
$(document).ready(function () {
  (function ($) {
    
    // slider
    $('.owl-carousel').owlCarousel({
      loop: true,
      lazyLoad: true,
      margin: 15,
      responsiveClass: true,
      autoplay: true,
      autoplayTimeout: 5000,
      autoplayHoverPause: false,
      nav: false,
      dots: false,
      stopOnHover : true,
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
          items: 4,
          loop: true
        }
      }
    })
  })(jQuery);
});