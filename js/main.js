import {
    CerraduraKleen,
    CerraduraPositiva,
    Exponenciacion,
    Longitud,
    Prefijo,
    Sufijo
} from "./resultados.js"; // Importa las funciones de resultados.js


const formElement = document.getElementById('form'); // Formulario
const nElement = document.getElementById('n'); // Input para n
const optionElement = document.getElementsByName('option'); // Select
const resultElement = document.getElementById('result'); // Resultado

// Agrega un evento a cada opción del select
optionElement.forEach((element) => {
    element.addEventListener('change', () => {
        // Evalua el valor de la opción
        if (
            element.value == 'kleen' ||
            element.value == 'exponenciacion' ||
            element.value == 'positiva'

        ) {
            // Muestra el input para n
            nElement.style.display = 'block';
            nElement.setAttribute('required', 'required');
        } else {
            // Oculta el input para n
            nElement.style.display = 'none';
            nElement.removeAttribute('required');
        }
    });
});

// Agrega un evento al formulario
formElement.addEventListener('submit', (e) => {
    e.preventDefault(); // Evita que se recargue la página

    resultElement.innerHTML = ''; // Limpia el resultado

    const option = e.target['option'].value; // Obtiene el valor del select
    const cadena = e.target['cadena'].value; // Obtiene el valor del input

    switch (option) { // Evalua el valor del select
        case 'kleen':
            // Llama a la función CerraduraKleen y le pasa la cadena y el valor de n
            resultElement.innerHTML = CerraduraKleen(cadena, e.target['n'].value)
            break;
        case 'exponenciacion':
            // Llama a la función Exponenciacion y le pasa la cadena y el valor de n
            resultElement.innerHTML = Exponenciacion(cadena, e.target['n'].value)
            break;
        case 'sufijo':
            // Llama a la función Sufijo y le pasa la cadena
            resultElement.innerHTML = Sufijo(cadena)
            break;
        case 'prefijo':
            // Llama a la función Prefijo y le pasa la cadena
            resultElement.innerHTML = Prefijo(cadena)
            break;
        case 'positiva':
            // Llama a la función CerraduraPositiva y le pasa la cadena y el valor de n
            resultElement.innerHTML = CerraduraPositiva(cadena, e.target['n'].value)
            break;
        case 'longitud':
            // Llama a la función Longitud y le pasa la cadena
            resultElement.innerHTML = Longitud(cadena)
            break;

        default: // Si no se selecciona ninguna opción
            break;
    }
});

