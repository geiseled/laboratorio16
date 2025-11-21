// Autor: Pacheco Medina Geisel Reymar
// Laboratorio 16 - Ejercicio 9

document.addEventListener("DOMContentLoaded", () => {
    // seleccionar la imagen grande
    const imagenGrande = document.getElementById("imagen-grande");
    // seleccionar todas las miniaturas
    const miniaturas = document.getElementsByClassName("thumb");
    // recorrer miniaturas y asignar evento click
    for (let i = 0; i < miniaturas.length; i++) {
        miniaturas[i].addEventListener("click", () => {
            // cambiar la imagen grande al src de la miniatura
            imagenGrande.src = miniaturas[i].src;
        });
    }
});
