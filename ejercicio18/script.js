// Autor: Pacheco Medina Geisel Reymar
// Laboratorio 16 - Ejercicio 18

document.addEventListener("DOMContentLoaded", () => {

    // cadena JSON que simula lista de libros
    const librosJSON = `
    [
        { "titulo": "El extranjero", "autor": "Albert Camus" },
        { "titulo": "La metamorfosis", "autor": "Franz Kafka" },
        { "titulo": "Metro 2033", "autor": "Dmitri Glujovski" }
    ]
    `;

    // convertir a objeto (arreglo)
    const libros = JSON.parse(librosJSON);

    // referencia al contenedor donde pondremos la tabla
    const contenedor = document.getElementById("contenedor-tabla");

    // crear tabla
    const tabla = document.createElement("table");

    // crear fila de encabezados
    const filaHead = document.createElement("tr");

    const thTitulo = document.createElement("th");
    thTitulo.textContent = "Titulo";

    const thAutor = document.createElement("th");
    thAutor.textContent = "Autor";

    filaHead.appendChild(thTitulo);
    filaHead.appendChild(thAutor);
    tabla.appendChild(filaHead);

    // filas de datos
    libros.forEach(libro => {
        const fila = document.createElement("tr");

        const tdTitulo = document.createElement("td");
        tdTitulo.textContent = libro.titulo;

        const tdAutor = document.createElement("td");
        tdAutor.textContent = libro.autor;

        fila.appendChild(tdTitulo);
        fila.appendChild(tdAutor);

        tabla.appendChild(fila);
    });

    // insertar tabla en el contenedor
    contenedor.appendChild(tabla);

});
