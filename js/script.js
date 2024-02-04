import Cadenas from "./operaciones.js"
//formulario
const form = document.getElementById('form')

//elementos del resultado
const respuestasSection = document.getElementById('respuestas')
const prefix = document.getElementById('prefix')
const sufijo = document.getElementById('sufijo')
const positiva = document.getElementById('positiva')
const kleen = document.getElementById('kleen')
const exponenciacion = document.getElementById('exponenciacion')

//otros
let isRespuestaVisible = false

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const text = e.target['text'].value

    if (text.length < 1) {
        alert('Ingrese al menos un caracter')
    } else {

        if (!isRespuestaVisible) {
            respuestasSection.classList.remove('invisible')
        }

        const cadena = new Cadenas(text)
        const n = 6

        prefix.innerText = cadena.prefix()
        sufix.innerText = cadena.sufix()
        positiva.innerText = JSON.stringify(cadena.cerraduraPositiva(n))
        kleen.innerText = JSON.stringify(cadena.cerraduraKleen(n))


        console.log(text)
    }
})





let cadena = new Cadenas('1234')

console.log(cadena.cerraduraKleen(3))