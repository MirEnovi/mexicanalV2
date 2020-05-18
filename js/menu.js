$(document).ready(function () {
  $('#menu-deplegable').on('click', (e) => {
    e.preventDefault();
    const pantalla = (window.innerHeight);
    console.log(pantalla);
    $('html, body').scrollTop(0);
  })
})
