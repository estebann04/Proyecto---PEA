document.addEventListener("DOMContentLoaded", function() {
    // Seleccionar todos los elementos <a> dentro del div con la clase "clases"
    const links = document.querySelectorAll('.clases a');
    const clases = document.querySelector('div.clases');

    // Oculta la seleccion de clases
    links.forEach(link => {
        link.addEventListener('click', function(event){
            clases.style.display = 'none';
            const materia = link.classList[0];
            const contenedor = document.querySelector('div.clase.' + materia);
            contenedor.style.display = 'flex';
        });
    });
    // Muestra la clase seleccionada
});