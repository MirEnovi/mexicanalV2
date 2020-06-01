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
			autoplayTimeout: 5000,
			autoplayHoverPause: false,
			nav: false,
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

const titleElement = document.querySelector('.titulo-programa-selec');
const domRectTitle = titleElement.getBoundingClientRect();
let offsetWidth =titleElement.offsetWidth;
let fifftyposition = Math.round(domRectTitle.x) + Math.round(offsetWidth/2);

const elementsSlider = document.querySelector('.owl-carousel');
// Opcions para el observer 
const observerOptions = {
	attributes: true,
	childList: true,
	subtree: true,
	characterData: false,
	attributeOldValue: false,
	characterDataOldValue: false
};


const observer = new MutationObserver(() => {
	observer.disconnect();
	const images = document.querySelectorAll('.owl-lazy');
	images.forEach(image => {
		
		if (!image.classList.contains('filter')) {
			image.classList.add('filter');
		}
		const domRectImage = image.getBoundingClientRect();
		const offsetWidthImage = image.offsetWidth;
		const fifftypositionImage = Math.round(domRectImage.x) + Math.round(offsetWidthImage/2);
		if ((fifftyposition + Math.round(offsetWidthImage)) === fifftypositionImage) {
			console.log(image.id);
			image.classList.remove('filter');
		}
	});
	observer.observe(elementsSlider, observerOptions)
});



setTimeout(() =>{ observer.observe(elementsSlider, observerOptions) }, 1000);


