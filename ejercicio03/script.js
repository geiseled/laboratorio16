// Autor: Pacheco Medina Geisel Reymar
// Laboratorio 16 - Ejercicio 3

document.addEventListener("DOMContentLoaded", () => {

    const parrafo = document.getElementById("parrafo");
    const botonCambiar = document.getElementsByTagName("button")[0];

    botonCambiar.addEventListener("click", () => {
        parrafo.textContent = "Texto cambiado";
    });
});

