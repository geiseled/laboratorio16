// Autor: Pacheco Medina Geisel Reymar
// Laboratorio 16 - Ejercicio 12

document.addEventListener("DOMContentLoaded", () => {

    const btnMover = document.getElementById("btn-mover");
    const btnReiniciar = document.getElementById("btn-reiniciar");
    const cuadro = document.getElementById("cuadro");

    // agregar clase para iniciar la animacion
    btnMover.addEventListener("click", () => {
        cuadro.classList.add("mover");
    });

    // quitar clase para reiniciar posicion
    btnReiniciar.addEventListener("click", () => {
        cuadro.classList.remove("mover");
    });
});

