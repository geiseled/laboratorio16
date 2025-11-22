// Autor: Pacheco Medina Geisel Reymar
// Laboratorio 16 - Ejercicio 19

document.addEventListener("DOMContentLoaded", () => {

    // JSON original (cadena)
    const personaJSON = `
    {
        "nombre": "Ana",
        "edad": 25,
        "ciudad": "Lima"
    }
    `;

    // convertir cadena JSON a objeto JS
    let persona = JSON.parse(personaJSON);

    // modificar un valor, por ejemplo la edad
    persona.edad = 26;

    // convertir nuevamente a JSON actualizado
    const jsonActualizado = JSON.stringify(persona, null, 4);

    // mostrar en pantalla
    document.getElementById("resultado").textContent = jsonActualizado;

});

