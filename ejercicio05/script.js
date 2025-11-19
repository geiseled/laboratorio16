// Autor: Pacheco Medina Geisel Reymar
// Laboratorio 16 - Ejercicio 5

document.addEventListener("DOMContentLoaded", () => {
    const boton = document.getElementsByTagName("button")[0];
    
    boton.addEventListener("click", () => {
        document.body.classList.toggle("oscuro");
    });
});

