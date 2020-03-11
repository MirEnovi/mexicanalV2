const configHome = {
  arrows: true,
  infinite: true,
  speed: 1000,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,

  responsive: [{
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
}

$(document).ready(function () {
  $('.slider-canales').slick({
    infinite: true,
  });
  $('.slider-pd').slick({
  infinite: true,
  });
});

