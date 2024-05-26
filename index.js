document.addEventListener("DOMContentLoaded", function() {
    const botonSomos = document.querySelector('a.Boton-Somos');
    const botonHistoria = document.querySelector('a.Boton-Historia');

    const somos = document.querySelector('section.somos');
    const index = document.querySelector('section.index');
    const historia = document.querySelector('section.historia-pea');

    botonSomos.addEventListener('click', function(event) {
        somos.style.display = 'block';
        index.style.display = 'none';
        historia.style.display = 'none';
    });
    botonHistoria.addEventListener('click', function(event){
        somos.style.display = 'none';
        index.style.display = 'none';
        historia.style.display = 'block';
    });
});