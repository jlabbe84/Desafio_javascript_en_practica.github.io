
const valor1 = document.querySelector("#valor1")
const valor2 = document.querySelector("#valor2")
const btnSumar = document.querySelector("#btn-sumar")
const btnRestar = document.querySelector("#btn-restar")

const resultado = document.querySelector(".resultado")

btnSumar.addEventListener('click', function () {
    let sumar = parseInt(valor1.value) + parseInt(valor2.value)
    console.log(sumar)
    resultado.innerHTML = sumar
})

btnRestar.addEventListener('click', function () {
    let resta = parseInt(valor1.value) - parseInt(valor2.value)
    console.log(resta)
    if (resta < 0) {
        resultado.innerHTML = 0
        alert("Resultado Resta Menor que 0")
    } else {
        resultado.innerHTML = resta
    }
})


