// Autor: Pacheco Medina Geisel Reymar
// Laboratorio 16 - Ejercicio 14

document.addEventListener("DOMContentLoaded", () => {

    // crear objeto persona
    const persona = {
        nombre: "Geisel",
        edad: 20,
        ciudad: "Arequipa"
    };

    // convertir a JSON
    const personaJSON = JSON.stringify(persona);

    // mostrar en consola
    console.log(personaJSON);

});

