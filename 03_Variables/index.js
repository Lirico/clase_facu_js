/* VARIABLES */

/* 
    var
    let -> Permitir
    const -> Constante
*/
// Hoisting o elevacion
// const musica = "Pop"


// {
//     const musica = "Rock"
// }


// musica = "Jazz"
// console.log(musica)


/******* Cuando usar let *********/

// 1. Cuando creamos una variable que ira modificandose a 
// largo del programa.
let contador = 0;
let visible = false;
let name = "";

/******* Cuando usar const *********/

// 1. Cuando declaramos un valor primitivo no sujeto a cambio.
const PI = 3.14161827381293
const e = 2.1617263172836812

// 2. Cuando queremos proteger un tipo de dato compuesto de
// cualquier reasignacion accidenta.
const auto = {
    marca: "Renault",
    color: "Rojo"
}

const carrito = [
    {},
    {},
    {}
]

const sumar = function() {
    
}

// 3. Cuando queres guardar una referencia a un elemento HTML
const $p = document.querySelector('p');

$p.textContent = contador

console.log($p)