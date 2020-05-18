$(document).ready(() => {
	$('.nav-zona').on('click', (e) => {
		e.preventDefault();
		console.log(e.target.id);
		if (e.target.id === 'este') {
			cambioClase(e.target.id, 'este')
		}
		if (e.target.id === 'centro') {
			cambioClase(e.target.id, 'centro')
		}
		if (e.target.id === 'pacifico') {
			cambioClase(e.target.id, 'pacifico')
		}
	});
	$('#clandario-show').on('click',(e)=>{
		e.preventDefault();
		console.log('calendario');
		$("#calendario").toggle();
	})
	$('#busqueda-show').on('click',(e)=>{
		e.preventDefault();
		console.log('busqueda');
		$("#busqueda").toggle();
	})
})

const cambioClase = (id, zona) => {
	$('#este').removeClass('zona-activa-este');
	$('#centro').removeClass('zona-activa-centro');
	$('#pacifico').removeClass('zona-activa-pacifico');
	$(`#${id}`).addClass(`zona-activa-${zona}`);
}