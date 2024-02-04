export default class Cadena {
    constructor(cadena = '') {
        this.cadena = cadena
        this.simbolo = 'Ɛ'
        this.final = '...'
        this.longitud = cadena.length
    }

    sufijo() {
        let arr = []
        let nuevaCadena = this.cadena

        for (let i = 0; i < this.longitud; i++) {
            arr.push(nuevaCadena)

            nuevaCadena = nuevaCadena.slice(0, -1)
        }

        arr.push(this.simbolo)

        return arr
    }

    prefijo() {
        let arr = []
        let nuevaCadena = this.cadena

        for (let i = 0; i < this.longitud; i++) {

            arr.push(nuevaCadena)

            nuevaCadena = nuevaCadena.slice(1, this.longitud)
        }

        arr.push(this.simbolo)

        return arr
    }

    cerraduraPositiva(n = 0) {
        let arr = []
        let nuevaCadena = this.cadena

        for (let index = 0; index < n; index++) {
            arr.push(nuevaCadena)

            nuevaCadena += nuevaCadena
        }

        arr.push(this.final)

        return arr
    }

    cerraduraKleen(n = 0) {
        let arr = []
        let nuevaCadena = this.cadena

        arr.push(this.simbolo)

        for (let index = 0; index < n - 1; index++) {
            arr.push(nuevaCadena)

            nuevaCadena += nuevaCadena
        }

        arr.push(this.final)


        return arr
    }

    exponenciacion(n = 0) {
        let arr = []

        return arr
    }
}