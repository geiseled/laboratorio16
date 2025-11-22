// Autor: Pacheco Medina Geisel Reymar
// Laboratorio 16 - Ejercicio 11

document.addEventListener("DOMContentLoaded", () => {

    const lista = document.getElementById("lista");

    // eliminar li al hacer clic usando delegacion
    lista.addEventListener("click", (event) => {
        // verificar si el elemento clickeado es un li
        if (event.target.tagName === "LI") {
            event.target.remove();
        }
    });
});
