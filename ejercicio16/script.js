// Autor: Pacheco Medina Geisel Reymar
// Laboratorio 16 - Ejercicio 16

document.addEventListener("DOMContentLoaded", () => {

    // arreglo de objetos productos
    const productos = [
        { nombre: "Laptop", precio: 3500 },
        { nombre: "Mouse", precio: 80 },
        { nombre: "Teclado", precio: 120 }
    ];

    // convertir a JSON
    const jsonProductos = JSON.stringify(productos);

    // convertir nuevamente a objeto
    const productosObjeto = JSON.parse(jsonProductos);

    // referencia al ul
    const lista = document.getElementById("lista-productos");

    // crear li por cada producto
    productosObjeto.forEach(prod => {
        const li = document.createElement("li");
        li.textContent = prod.nombre;
        lista.appendChild(li);
    });

});
