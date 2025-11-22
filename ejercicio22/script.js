// Autor: Pacheco Medina Geisel Reymar
// Laboratorio 16 - Ejercicio 22

document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("form-perfil");
    const divPerfil = document.getElementById("perfil");
    // cargar perfil si existe en localStorage
    const perfilGuardado = localStorage.getItem("perfil");
    if (perfilGuardado) {
        const objPerfil = JSON.parse(perfilGuardado);
        mostrarPerfil(objPerfil);
    }
    // evento submit del formulario
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        const nombre = document.getElementById("nombre").value;
        const edad = document.getElementById("edad").value;
        const pais = document.getElementById("pais").value;
        // crear objeto
        const perfil = {
            nombre: nombre,
            edad: edad,
            pais: pais
        };
        // guardar en localStorage
        localStorage.setItem("perfil", JSON.stringify(perfil));
        // mostrar perfil en DOM
        mostrarPerfil(perfil);
    });
    // funcion para mostrar los datos en pantalla
    function mostrarPerfil(perfil) {
        divPerfil.innerHTML = `
            <p><strong>Nombre:</strong> ${perfil.nombre}</p>
            <p><strong>Edad:</strong> ${perfil.edad}</p>
            <p><strong>Pais:</strong> ${perfil.pais}</p>
        `;
    }
});
