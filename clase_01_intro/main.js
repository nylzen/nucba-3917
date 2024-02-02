// console.log("hola desde mi main.js")

/*
 Tipos de datos que tenemos en JS
 - string = 'Ejemplo', "Ejemplo", `Ejemplo`
 - number = 123, 1.2
 - boolean = true/false
 - undefined = algo no definido
 - null = vacio
*/

// console.log(typeof NaN)

// Variables
// var nombreVariable = 'algo'
// console.log(nombreVariable)
// var nombreVariable = 15
// console.log(nombreVariable)

// F VAR

// se declara cuando uso la palabra reservada
// let, no puedo re-declarar una variable, podemos cambiar el valor
let nombreVariable = "tuki"; // string
// console.log(nombreVariable)

nombreVariable = "messi";
// console.log(nombreVariable)

// const
// const, no podemos re-declarar y no podemos cambiar el valor
const nombreConstante = "Messi campeon del mundo";
// console.log(nombreConstante)
// nombreConstante = 'Messi'

// var numeroA = 10
let numeroA = 10;
let numeroB = 20;

// console.log(numeroA)
// console.log(numeroB)
// console.log(numeroA, numeroB)
// console.log(numeroA, numeroB)

let textoA = "Harry";
let textoB = `Potter`;

// console.log(textoA + textoB)
// console.log(textoA + " " + textoB)
// console.log(`El nombre de la pelicula es: ${textoA} otra cosa ${textoB}`)
// alert('holi')

// Operadores
/*
+ sumar
- restar
* multiplicar
/ division
** calcular la base a la potencia
% resto
++ incrementar
-- decrementar
*/

// console.log(numeroA)

// let numeroA = 40 // error porque ya existe
// console.log(numeroA)
let numeroUno = 10;
let numeroDos = 15;

// suma
// console.log(numeroUno + numeroDos)
// console.log(numeroB + numeroDos)

// resta
// let resultado = numeroA - numeroDos
// console.log(resultado)

// multiplicar
// console.log(numeroA * numeroB);

// division
// console.log(numeroA / numeroB)

// modulo /resto
// console.log(numeroUno % 2)
// console.log(numeroDos % 2)
// console.log(numeroDos % 5)

// incrementar
// console.log(numeroUno)
numeroUno++
// console.log(numeroUno)
// numeroUno = numeroUno + 1
// numero++ simplifica lo de arriba, es lo mismo
console.log(numeroUno)

// decrementar
numeroUno--
numeroUno--
numeroUno--
// console.log(numeroUno)

// prompt(): es una funcion para abrir una ventanita para que el user ingrese un valor
// prompt('hola') no se guarda en ningun lado
// let nombre = prompt('Como te llamas?')
// console.log(nombre)
// alert('hola' + " " +  nombre)
// alert(`hola ${nombre}`)