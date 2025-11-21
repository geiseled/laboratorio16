// Autor: Pacheco Medina Geisel Reymar
// Laboratorio 16 - Ejercicio 8

document.addEventListener("DOMContentLoaded", () => {

    const formulario = document.getElementById("formulario");
    const inputNombre = document.getElementById("nombre");
    const inputCorreo = document.getElementById("correo");

    formulario.addEventListener("submit", (event) => {
        event.preventDefault();
        limpiarErrores();
        let hayError = false;
        // validar nombre
        if (inputNombre.value.trim() === "") {
            mostrarError(inputNombre, "El nombre no puede estar vacio");
            hayError = true;
        }
        // validar correo
        if (inputCorreo.value.trim() === "") {
            mostrarError(inputCorreo, "El correo no puede estar vacio");
            hayError = true;
        }
        if (!hayError) {
            alert("Formulario enviado correctamente");
        }
    });
    // funcion para mostrar error debajo del input
    function mostrarError(input, mensaje) {
        const span = document.createElement("span");
        span.textContent = mensaje;
        span.classList.add("error");
        input.parentElement.appendChild(span);
    }
    // eliminar mensajes anteriores
    function limpiarErrores() {
        document.querySelectorAll(".error").forEach(span => span.remove());
    }
});

