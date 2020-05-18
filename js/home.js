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

	let pulse = 1;

	$('.texto-card').on('click', (e) => {
		e.preventDefault();

		if (e.target.id === 'card-show-1' && pulse === 1) {
			cambioClase('card-1');
			pulse = 2;
		} else if (e.target.id === 'card-show-2'  && pulse === 1) {
			cambioClase('card-2');
			pulse = 2;
		} else if (e.target.id === 'card-show-3'  && pulse === 1) {
			cambioClase('card-3');
			pulse = 2;
		} else {
			cambioClase('card-0')
			pulse = 1;
		}
	});


});

const cambioClase = (id) => {
	console.log(id);
	$('#card-1').removeClass('info-card-active');
	$('#card-2').removeClass('info-card-active');
	$('#card-3').removeClass('info-card-active');
	$(`#${id}`).addClass(`info-card-active`);
}