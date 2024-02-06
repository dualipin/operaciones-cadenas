export default class Cadena {
    constructor(cadena = '') {
        this.cadena = cadena // Cadena de texto
        this.simbolo = 'Ɛ' // Simbolo vacio
        this.longitud = cadena.length // Longitud de la cadena
    }

    /**
     * Se obtiene el conjunto de sufijos de una cadena
     * @returns {Array} Arreglo de sufijos
     */
    prefijo() {
        let arr = [] // Arreglo de sufijos
        let nuevaCadena = this.cadena // Cadena de texto

        for (let i = 0; i < this.longitud; i++) {
            arr.push(nuevaCadena) // Agregar sufijo al arreglo

            nuevaCadena = nuevaCadena.slice(0, -1) // Eliminar el ultimo caracter de la cadena
        }

        arr.push(this.simbolo) // Agregar simbolo vacio al arreglo

        return arr // Retornar arreglo
    }

    /**
     * Se obtiene el conjunto de prefijos de una cadena
     * @returns {Array} Arreglo de prefijos
     */
    sufijo() {
        let arr = [] // Arreglo de prefijos
        let nuevaCadena = this.cadena // Cadena de texto

        for (let i = 0; i < this.longitud; i++) {

            arr.push(nuevaCadena) // Agregar prefijo al arreglo

            nuevaCadena = nuevaCadena.slice(1, this.longitud) // Eliminar el primer caracter de la cadena
        }

        arr.push(this.simbolo) // Agregar simbolo vacio al arreglo

        return arr // Retornar arreglo
    }

    /**
     * 
     * @param {Number} n Numero de veces que se repite la cadena
     * @returns retorna un arreglo con la cadena repetida n veces
     */
    cerraduraPositiva(n = 0) {
        let arr = [] // Arreglo de cadenas
        let nuevaCadena = this.cadena // Cadena de texto

        for (let index = 0; index < n; index++) {
            arr.push(nuevaCadena) // Agregar cadena al arreglo

            nuevaCadena += this.cadena // Concatenar cadena
        }

        return arr // Retornar arreglo
    }

    /**
     * 
     * @param {Number} n Numero de veces que se repite la cadena
     * @returns retorna un arreglo con la cadena repetida n veces
     */
    cerraduraKleen(n = 0) {
        let arr = [] // Arreglo de cadenas
        let nuevaCadena = this.cadena // Cadena de texto

        arr.push(this.simbolo) // Agregar simbolo vacio al arreglo

        for (let index = 0; index < n - 1; index++) {
            arr.push(nuevaCadena) // Agregar cadena al arreglo

            nuevaCadena += this.cadena // Concatenar cadena
        }


        return arr // Retornar arreglo
    }

    exponenciacion(n = 0) {
        let arr = []

        arr.push(this.simbolo)

        let nuevaCadena = this.cadena

        for (let index = 0; index < n; index++) {
            arr.push(nuevaCadena)

            nuevaCadena += `.${this.cadena}`
        }

        return arr
    }

    getLongitud() {
        let length = this.longitud

        return parseInt(length)
    }
}