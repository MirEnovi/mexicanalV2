

// CALENDARIO
const mesDom = document.getElementById('mes');
const yearDom = document.getElementById('year');
const diasDom = document.getElementById('dias');

const prev = document.getElementById('prev');
const next = document.getElementById('next');

const fecha = new Date();
const hoy = fecha.getDate() + "/" + (fecha.getMonth() +1) + "/" + fecha.getFullYear();

const meses = ['ENERO', 'FEBRERO', 'MARZO', 'ABRIL', 'MAYO', 'JUNIO', 'JULIO', 'AGOSTO', 'SEPTIEMBRE', 'OCTUBRE', 'NOVIEMBRE', 'DICIEMBRE'];

const month = ['JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY', 'JUNE', 'JULY', 'AUGUST', 'SEPTEMBER', 'OCTOBER', 'NOVEMBER', 'DECEMBER'];
const diasEnUnMes = (mes, año) => {
	return new Date(año, mes, 0).getDate();
}

const rellenarCalendario = (mes, year, dia) => {
	const diasDeMes = diasEnUnMes((mes+1), year);
	const diaUno =  new Date(`${month[mes]} ${1}, ${year}`).getDay();
	mesDom.innerHTML = `<span class="nombre-mes" id="${mes}">${meses[mes]}</span>`;
	yearDom.innerHTML = `<span class="text-year" id="${year}">${ year}</span>`;
	diasDom.innerHTML = '';
	for (let i = 0; i < (diasDeMes + diaUno); i++) {
		if (i<diaUno) {
			diasDom.innerHTML += `
				<li></li>
			`
		} else {
			// console.log((i+1)-diaUno);
			if ((i+1)-diaUno == dia ) {
				diasDom.innerHTML += `
				<li class="send-day" id="${(i+1)-diaUno}">
					<span class="active">${(i+1)-diaUno}</span>
				</li>
				`
			} else {
				diasDom.innerHTML += `
				<li class="send-day" id="${(i+1)-diaUno}" >${(i+1)-diaUno}</li>
				`
			}
		}
	}

// TOMA EL ID DEL DIA QUE SELECCIONO Y ENVIAR
	$('.send-day').on('click', (e) => {
		e.preventDefault();
		const mes = document.querySelector('.nombre-mes');
		const year = document.querySelector('.text-year');
		rellenarCalendario(mes.id, year.id, e.target.id);

		const seleccionFecha = `${e.target.id}/${parseInt(mes.id)+1}/${year.id}`
		console.log(seleccionFecha);
	})
}

prev.addEventListener('click', (e)=>{
	e.preventDefault();
	const mes = document.querySelector('.nombre-mes');
	const year = document.querySelector('.text-year');

	if (mes.id === '0' ) {
		rellenarCalendario(`${parseInt(mes.id) + 11}`, (year.id-1), 1);
	} else {
		rellenarCalendario((mes.id-1), (year.id), 1);
	}
})

next.addEventListener('click', (e)=>{
	e.preventDefault();
	const mes = document.querySelector('.nombre-mes');
	const year = document.querySelector('.text-year');
	const mesHoy = fecha.getMonth();
	const yearHoy = fecha.getFullYear();

	console.log(mes.id, mesHoy);
	if (mes.id == parseInt(mesHoy)+1  && year.id == yearHoy) {
		console.log('no hay nada adelante');
		alert('Lo sentimos, no hay programación más adelante')
	} else {
		if (mes.id === '11' ) {
			rellenarCalendario(`${parseInt(mes.id) - 11}`, (parseInt(year.id)+1), 1);
		} else {
			rellenarCalendario((parseInt(mes.id)+1), (year.id), 1);
		}
	}
});

const getMes = fecha.getMonth();
const getYear = fecha.getFullYear();
const getDia = fecha.getDate();
rellenarCalendario(getMes, getYear, getDia);


// FIN CALENDARIO



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