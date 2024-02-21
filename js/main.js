const resultElement = document.getElementById('result'); // Resultado
const resultbtn = document.getElementById('btnResult'); // Resultado
const borrarElement = document.getElementById('borrar');
const CADENA_INPUT = document.getElementById('cadena');

borrarElement.addEventListener('click', (e)=>{
    resultElement.innerHTML = '<h2>Aquí se mostraran los resultados</h2>'
})
// Agrega un evento al boton 'resolver'
resultbtn.addEventListener('click', compilar);

function compilar(){
    //let res = compilarLR(CADENA_INPUT.value);
    //resultElement.innerHTML = res;
    identificarPuntos(CADENA_INPUT.value);
    identificarExponentes(Concat);
}
function identificarExponentes(arr){
    for (let i = 0; i < arr.length; i++) {
        for (let f = 0; f < arr[i].length; f++) {
            if(arr[i].slice(f,f+1) === "^"){
                if(Operadores["Cerradura de Kleene"] === arr[i].slice(f+1,f+2)){
                    console.log("Es Kleene (*)");
                } else if(Operadores["Cerradura Positiva"] === arr[i].slice(f+1,f+2)){
                    console.log("Es Positiva (+)");
                }
            }
        }
    }
}
// CATEGORÍAS LÉXICAS EN UN LENGUAJE REGULAR
let Operadores = {
    "Cerradura de Kleene": "*",
    "Cerradura Positiva": "+",
    "Concatenacion": ".",
    "Union": "|"
};
let palabrasClaves = {
    "Cadena vacía": "E"
}
let delimitadores = {
    "Parentesis de inicio": "(",
    "Parentesis de cierre": ")"
}
let Concat = [];
const MAX_N_FINITO = 4;
function identificarPuntos(cadena){
    let p1 = 0;
    for (let i = 0; i < cadena.length; i++) {
        console.log(cadena.slice(i,i+1));
        if(cadena.slice(i,i+1) === "."){
            console.log("Se encontro: ",cadena.slice(p1,i));
            Concat.push(cadena.slice(p1,i));
            p1 = i+1;
        }
    }
    console.log("Se encontro: ",cadena.slice(p1));
    Concat.push(cadena.slice(p1));
    console.log("Se encontraron:", Concat);
}

