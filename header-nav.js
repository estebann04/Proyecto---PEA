document.addEventListener("DOMContentLoaded", function() {
    // Carga el header y el nav en las clases de apoyo
    fetch('header.html')
    .then(response => response.text())
    .then(data => {
        document.querySelector('header').innerHTML = data;
    });
    fetch('nav.html')
    .then(response => response.text())
    .then(data => {
        document.querySelector('nav').innerHTML = data;
    });
});