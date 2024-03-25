// Definicion Variables
const formulario = document.querySelector("#formulario")
const ingresoNombre = document.querySelector("#nombre")
const ingresoAsunto = document.querySelector("#asunto")
const ingresoMensaje = document.querySelector("#mensaje")

const errorNombre = document.querySelector('.errorNombre')
const errorAsunto = document.querySelector('.errorAsunto')
const errorMensaje = document.querySelector('.errorMensaje')

const resultado = document.querySelector('.resultado')

const regexNombre = /^[a-zA-Z ]+$/;
const regexAsunto = /^[a-zA-Z ]+$/;
const regexMensaje = /^[a-zA-Z ]+$/;

formulario.addEventListener("submit", (evento) => {
    // detener el comportamiento por defecto
    evento.preventDefault()

    // reiniciar los errores
    resultado.innerHTML = ""
    errorNombre.innerHTML = ""
    errorAsunto.innerHTML = ""
    errorMensaje.innerHTML = ""

    // capturar el value de los inputs
    const nombre = ingresoNombre.value
    const asunto = ingresoAsunto.value
    const mensaje = ingresoMensaje.value

    // validación Nombre
    if (!regexNombre.test(nombre)) {
        errorNombre.innerHTML = "El Nombre es Requerido"
       
    }

    // validación Asunto
    if (!regexAsunto.test(asunto)) {
        errorAsunto.innerHTML = "El Asunto es Requerido"
       
    }

    // validación Mensaje
    if (!regexMensaje.test(mensaje)) {
        errorMensaje.innerHTML = "El Mensaje es Requerido"
       
    }

    if (!regexMensaje.test(mensaje) === false && !regexAsunto.test(asunto) === false && !regexNombre.test(nombre) === false) {
        resultado.innerHTML = "Mensaje enviado con éxito!!!"
    }

})


