// Autor: Pacheco Medina Geisel Reymar
// Laboratorio 16 - Ejercicio 15

document.addEventListener("DOMContentLoaded", () => {

    // cadena JSON
    const cadenaJSON = '{"nombre":"Carlos","edad":30,"ciudad":"Arequipa"}';

    // convertir la cadena a objeto
    const persona = JSON.parse(cadenaJSON);

    // mostrar uno de los valores en el DOM
    const resultado = document.getElementById("resultado");
    resultado.textContent = "Nombre: " + persona.nombre;

});
