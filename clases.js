
// Oculta la seleccion de clases
function Ocultar(links, clases){
    links.forEach(link => {
        link.addEventListener('click', function(event){
            clases.style.display = 'none';
            const materia = link.classList[0];
            const contenedor = document.querySelector('div.clase.' + materia);
            const botonSeleccion = document.querySelector('a.seleccionar');
            contenedor.style.display = 'flex';
            botonSeleccion.style.display = 'block';
        });
    });
}

document.addEventListener("DOMContentLoaded", function() {
    // Seleccionar todos los elementos <a> dentro del div con la clase "clases"
    const links = document.querySelectorAll('.clases a');
    const clases = document.querySelector('div.clases');
    Ocultar(links, clases);
    const botonSeleccion = document.querySelector('a.seleccionar');
    botonSeleccion.addEventListener('click',function (event){
        botonSeleccion.style.display = 'none';
        clases.style.display = 'grid';
         links.forEach(link => {
             const materia = link.classList[0];
             const contenedor = document.querySelector('div.clase.' + materia);
             contenedor.style.display = 'none';
        });
    });
});