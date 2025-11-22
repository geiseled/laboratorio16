// Autor: Pacheco Medina Geisel Reymar
// Laboratorio 16 - Ejercicio 20

document.addEventListener("DOMContentLoaded", () => {

    const inputNombre = document.getElementById("nombre");
    const botonGuardar = document.getElementById("btn-guardar");

    botonGuardar.addEventListener("click", () => {
        // crear objeto con el nombre ingresado
        const usuario = {
            nombre: inputNombre.value
        };
        // convertir a JSON
        const jsonUsuario = JSON.stringify(usuario);
        // mostrar en consola
        console.log(jsonUsuario);
    });

});
