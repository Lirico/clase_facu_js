/********* COERCION DE TIPOS DE DATO **********/

// Aplicar una suma entre numeros
// console.log(3 + 3) // -> Numero

// Aplicar una suma entre un numero y una cadena de valor numerico
console.log(3 + "3") // -> 33 -> Concatenacion (No es suma)
/* JavaScript convierte al intruso en el tipo de dato 
necesario para operar. En este caso al numero en cadena */

// Aplicar una operacion artimetica (no suma) entre numero y cadena.
// Primera posibilidad -> numero contra cadena numerica
console.log(3 * "3") // -> 9 -> Cadena se coercion a numero
/* La multiplicacion (por ejemplo) no se puede convertir a concatenacion
por lo tanto el intruso es la cadena */
// Segunda posibilidad -> numero contra cadena no numerica
console.log(3 * "hola") // -> NaN -> El resultado de la coercion da un valor de tipo number que no puede ser respresentado.

// Aplicamos una operacion artimetica entre un numero y booleano
console.log(1 + true) // -> 2 -> El valor implicito del booleano tras coercion a number es 1 o 0, dependiendo de si es true o false, en ese orden.

