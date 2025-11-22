// Autor: Pacheco Medina Geisel Reymar
// Laboratorio 16 - Ejercicio 17

document.addEventListener("DOMContentLoaded", () => {

    // objeto usuario
    const usuario = {
        nombre: "Carlos",
        correo: "carlos@gmail.com",
        rol: "admin"
    };

    // convertir a JSON
    const jsonUsuario = JSON.stringify(usuario);

    // guardar en localStorage
    localStorage.setItem("usuario", jsonUsuario);

    // recuperar desde localStorage
    const recuperado = localStorage.getItem("usuario");

    // convertir nuevamente a objeto
    const usuarioObj = JSON.parse(recuperado);

    // mostrar datos en pantalla
    const resultado = document.getElementById("resultado");
    resultado.textContent = "Nombre: " + usuarioObj.nombre +
                            ", Correo: " + usuarioObj.correo +
                            ", Rol: " + usuarioObj.rol;

});
