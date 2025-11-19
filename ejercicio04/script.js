// Autor: Pacheco Medina Geisel Reymar
// Laboratorio 16 - Ejercicio 4

document.addEventListener("DOMContentLoaded", () => {

    const parrafo = document.getElementById("parrafo");
    const botonCambiar = document.getElementsByTagName("button")[0];

    botonCambiar.addEventListener("click", () => {
        if (parrafo.textContent === "Texto original") {
            parrafo.textContent = "Texto cambiado";
        } else {
            parrafo.textContent = "Texto original";
        }
    });

});

