import Cadena from "./operaciones.js"; // Importa la clase Cadena
let CONCATENACIONES = [];

export const compilarLR = (cadena) => {
    //identificarPuntos(cadena);
    return "Success";
}

/**
 * Componente que se encarga de realizar la operación de cerradura positiva
 * @param {String} cadena Cadena de texto
 * @param {number} n Cantida de veces que se repite la cadena
 * @returns retorna el html con la cadena repetida n veces
 */
export const CerraduraPositiva = (cadena, n) => {
    const operacion = new Cadena(cadena) // Instancia de la clase Cadena

    // Llama a la función cerraduraPositiva y le pasa la cantidad de veces que se repite la cadena
    const positiva = operacion.cerraduraPositiva(n)

    // Crea el html
    let html = 'S<sup>+</sup> = {&nbsp;'

    // Recorre el arreglo de cadenas
    positiva.forEach((element) => {
        html += `${element},&nbsp;`
    })

    html += '...&nbsp;}' // Cierra el html

    return html // Retorna el html
}

/**
 * Componente que se encarga de realizar la operación de cerradura de Kleen
 * 
 * @param {String} cadena Cadena de texto
 * @param {number} n Cantida de veces que se repite la cadena
 * @returns retorna el html con la cadena repetida n veces
 */
export const CerraduraKleen = (cadena, n) => {
    const operacion = new Cadena(cadena) // Instancia de la clase Cadena

    // Llama a la función cerraduraKleen y le pasa la cantidad de veces que se repite la cadena
    const kleen = operacion.cerraduraKleen(n)

    let html = 'S<sup>*</sup> = {&nbsp;' // Crea el html

    // Recorre el arreglo de cadenas
    kleen.forEach((element) => {
        html += `${element},&nbsp;`
    })

    html += '...&nbsp;}' // Cierra el html

    return html // Retorna el html
}


/**
 * Componente que se encarga de realizar la operación de prefijo
 * 
 * @param {String} cadena Cadena de texto
 * @returns retorna el html con los prefijos de la cadena
 */
export const Prefijo = (cadena) => {
    const operacion = new Cadena(cadena) // Instancia de la clase Cadena

    // Llama a la función prefijo
    const prefijo = operacion.prefijo()

    let html = '' // Crea el html

    // Recorre el arreglo de cadenas
    prefijo.forEach((element) => {
        html += `S = ${element}<br>`
    })

    return html // Retorna el html
}


/**
 * Componente que se encarga de realizar la operación de sufijo
 * 
 * @param {String} cadena Cadena de texto
 * @returns retorna el html con los sufijos de la cadena
 */
export const Sufijo = (cadena) => {
    const operacion = new Cadena(cadena) // Instancia de la clase Cadena

    // Llama a la función sufijo
    const sufijo = operacion.sufijo()

    let html = '' // Crea el html

    // Recorre el arreglo de cadenas
    sufijo.forEach((element) => {
        html += `S = ${element}<br>`
    })

    return html // Retorna el html
}


/**
 * Componente que se encarga de realizar la operación de exponenciación
 * 
 * @param {String} cadena Cadena de texto
 * @param {number} n Cantida de veces que se repite la cadena
 * @returns retorna el html con la cadena repetida n veces
 */
export const Exponenciacion = (cadena, n) => {
    const operacion = new Cadena(cadena) // Instancia de la clase Cadena

    // Llama a la función exponenciacion y le pasa la cantidad de veces que se repite la cadena
    const exponenciacion = operacion.exponenciacion(n)

    let html = `A = ${cadena}<br>` // Crea el html

    // Recorre el arreglo de cadenas
    exponenciacion.forEach((element, i) => {

        html += `S<sup>${i}</sup> = ${element}<br>`

    })

    return html // Retorna el html
}


/**
 * Componente que se encarga de realizar la operación de longitud
 * 
 * @param {String} cadena Cadena de texto
 * @returns retorna el html con la longitud de la cadena
 */
export const Longitud = (cadena) => {
    const operacion = new Cadena(cadena) // Instancia de la clase Cadena

    // Llama a la función longitud
    const longitud = operacion.getLongitud()


    let html = `
    S = ${cadena}<br>
    |S| = ${longitud}
    `


    return html // Retorna el html
}