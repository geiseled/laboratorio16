// Autor: Pacheco Medina Geisel Reymar
// Laboratorio 16 - Ejercicio 10

document.addEventListener("DOMContentLoaded", () => {
    // arreglo de objetos dado por el ejercicio
    const productos = [
        { nombre: "Laptop", precio: 3500 },
        { nombre: "Mouse", precio: 80 }
    ];

    const boton = document.getElementById("btn-generar");
    const contenedor = document.getElementById("contenedor-tabla");
    // generar tabla al presionar el boton
    boton.addEventListener("click", () => {
        // limpiar contenido previo
        contenedor.innerHTML = "";
        // crear tabla
        const tabla = document.createElement("table");
        // crear fila de encabezados
        const filaEncabezado = document.createElement("tr");
        const thNombre = document.createElement("th");
        thNombre.textContent = "Nombre";

        const thPrecio = document.createElement("th");
        thPrecio.textContent = "Precio";

        filaEncabezado.appendChild(thNombre);
        filaEncabezado.appendChild(thPrecio);
        tabla.appendChild(filaEncabezado);
        // recorrer el arreglo y crear filas
        productos.forEach(prod => {
            const fila = document.createElement("tr");
            const tdNombre = document.createElement("td");
            tdNombre.textContent = prod.nombre;
            const tdPrecio = document.createElement("td");
            tdPrecio.textContent = prod.precio;
            fila.appendChild(tdNombre);
            fila.appendChild(tdPrecio);
            tabla.appendChild(fila);
        });
        // agregar tabla al contenedor
        contenedor.appendChild(tabla);
    });
});
