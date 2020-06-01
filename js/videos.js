$(document).ready(function () {
	(function ($) {
		// slider
		$('.owl-carousel').owlCarousel({
			loop: true,
			lazyLoad: true,
			margin: 0,
			responsiveClass: true,
			autoplay: true,
			autoplayTimeout: 5000,
			autoplayHoverPause: false,
			nav: false,
			dots: false,
			responsive: {
				0: {
					items: 2,
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