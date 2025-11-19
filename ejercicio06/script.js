// Autor: Pacheco Medina Geisel Reymar
// Laboratorio 16 - Ejercicio 6

document.addEventListener("DOMContentLoaded", () => {

    const contador = document.getElementById("contador");
    const mensaje = document.getElementById("mensaje");

    const botonMenos = document.getElementById("btnMenos");
    const botonMas = document.getElementById("btnMas");

    let valor = 0;

    botonMas.addEventListener("click", () => {
        valor++;
        contador.textContent = valor;
        mensaje.textContent = "";
    });

    botonMenos.addEventListener("click", () => {
        if (valor > 0) {
            valor--;
            contador.textContent = valor;
            mensaje.textContent = "";
        } else {
            mensaje.textContent = "El contador no puede bajar de cero";
        }
    });

});
