// Autor: Geisel Pacheco
// Laboratorio 16 - Ejercicio 7

document.addEventListener("DOMContentLoaded", () => {

    const entrada = document.getElementById("entrada-texto");
    const botonAgregar = document.getElementById("btn-agregar");
    const botonEliminar = document.getElementById("btn-eliminar");
    const lista = document.getElementById("lista");

    // agregar item nuevo
    botonAgregar.addEventListener("click", () => {
        const texto = entrada.value;

        if (texto !== "") {
            const nuevoLi = document.createElement("li");
            nuevoLi.textContent = texto;
            lista.appendChild(nuevoLi);

            entrada.value = "";
        }
    });

    // eliminar ultimo item
    botonEliminar.addEventListener("click", () => {
        const ultimo = lista.lastElementChild;

        if (ultimo) {
            lista.removeChild(ultimo);
        }
    });
});

