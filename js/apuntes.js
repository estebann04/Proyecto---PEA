document.addEventListener("DOMContentLoaded", function() {
    const botones = document.querySelectorAll(".carrera > a");

    botones.forEach(function(boton) {
        boton.addEventListener("click", function(e) {
        e.preventDefault();

        const ul = boton.nextElementSibling;
        if (ul.style.display === "block") {
            ul.style.display = "none";
        } else {
            ul.style.display = "block";
        }
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const botones = document.querySelectorAll(".año > a");

    botones.forEach(function(boton) {
        boton.addEventListener("click", function(e) {
        e.preventDefault();

        const ul = boton.nextElementSibling;
        if (ul.style.display === "block") {
            ul.style.display = "none";
        } else {
            ul.style.display = "block";
        }
        });
    });
});