// Autor: Pacheco Medina Geisel Reymar
// Laboratorio 16 - Ejercicio 13

document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("form-usuario");
    const inputNombre = document.getElementById("nombre");
    const inputEdad = document.getElementById("edad");
    const tablaBody = document.getElementById("tabla-body");

    let modoEdicion = false;
    let indiceEdicion = null;

    // guardar usuario o actualizar si esta en edicion
    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const nombre = inputNombre.value.trim();
        const edad = inputEdad.value.trim();

        // evitar campos vacios
        if (nombre === "" || edad === "") {
            alert("Complete todos los campos");
            return;
        }

        if (!modoEdicion) {
            agregarFila(nombre, edad);
        } else {
            actualizarFila(nombre, edad);
        }

        form.reset();
        modoEdicion = false;
        indiceEdicion = null;
    });

    // agregar nueva fila a la tabla
    function agregarFila(nombre, edad) {
        const fila = document.createElement("tr");

        fila.innerHTML = `
            <td>${nombre}</td>
            <td>${edad}</td>
            <td>
                <button class="btn-editar" data-accion="editar">Editar</button>
                <button class="btn-eliminar" data-accion="eliminar">Eliminar</button>
            </td>
        `;

        tablaBody.appendChild(fila);
    }

    // actualizar fila existente
    function actualizarFila(nombre, edad) {
        const filas = tablaBody.querySelectorAll("tr");
        const fila = filas[indiceEdicion];

        fila.children[0].textContent = nombre;
        fila.children[1].textContent = edad;
    }

    // delegacion de eventos para botones editar y eliminar
    tablaBody.addEventListener("click", (event) => {

        const boton = event.target;

        if (boton.dataset.accion === "eliminar") {
            boton.parentElement.parentElement.remove();
        }

        if (boton.dataset.accion === "editar") {
            const fila = boton.parentElement.parentElement;
            const nombre = fila.children[0].textContent;
            const edad = fila.children[1].textContent;

            inputNombre.value = nombre;
            inputEdad.value = edad;

            modoEdicion = true;

            // guardar el indice de la fila que se esta editando
            const filas = Array.from(tablaBody.children);
            indiceEdicion = filas.indexOf(fila);
        }

    });

});
