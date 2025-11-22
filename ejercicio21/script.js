// Autor: Pacheco Medina Geisel Reymar
// Laboratorio 16 - Ejercicio 21

document.addEventListener("DOMContentLoaded", () => {

    // cadena JSON con tareas
    const jsonTareas = `
    [
        { "titulo": "Estudiar JavaScript", "completada": true },
        { "titulo": "Hacer el laboratorio 16", "completada": false },
        { "titulo": "Repasar grafos", "completada": true }
    ]
    `;

    // parsear JSON a objeto JS
    const tareas = JSON.parse(jsonTareas);

    const contenedor = document.getElementById("contenedor-lista");

    // crear lista
    const lista = document.createElement("ul");

    // generar dinamicamente los li
    tareas.forEach(tarea => {
        const li = document.createElement("li");
        li.textContent = tarea.titulo;
        li.classList.add("tarea-item");

        // asignar color segun estado
        if (tarea.completada) {
            li.classList.add("completada");
        } else {
            li.classList.add("pendiente");
        }

        lista.appendChild(li);
    });

    contenedor.appendChild(lista);
});
