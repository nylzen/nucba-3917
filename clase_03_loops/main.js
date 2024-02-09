// Bucles
// For
/*
 for (inicio, condicion, actualizacion){
  ... lo que necesitemos repetir
 }
*/

// hacer un contador del 1 al 10
// console.log(1)
// console.log(2)
// console.log(3)
// console.log(4)
// console.log(5)
// console.log(6)
// console.log(7)
// console.log(8)
// console.log(9)
// console.log(10)

// for (let i =1 ; i <= 10; i++) {
//   // console.log(`El numero que estamos imprimiendo es el ${i}`)
//   // console.log('====')
//   console.log(i)
// }

/*
1. Inicio, creamos una variable i que tiene el valor de 1
2. Condicion, preguntamos si i es menor o igual a 10
3. Si la condicion es falsa se termina el bucle
4. Si la condicion es verdad ejecuta lo que esta dentro del for
5. Actualiza, incrementa la variable i en 1 con el i++ (i vale 2)
6. Vuelve al paso 2 evalua la condicion y asi sucesivamente hasta que la condicion sea falsa
 */

// Break
// for (let i = 1; i <= 10; i++) {
//  if(i === 3) break;
//  console.log(i)
// }

// continue
// for (let i = 1; i <= 10; i++) {
//   if( i == 3){
//     continue
//   }
//   console.log(i)
// }

// Ejercicio, quiero imprimir los numeros pares y los impares por separado
/*
usamos un bucle (for)
evaluamos si el numero es par o impar % 2 === 0
imprimimos
*/

// for (let i = 1; i <= 30; i++) {
//   // console.log('holi')
//   if (i % 2 === 0) {
//     console.log(`El numero ${i} es par`);
//   } else {
//     console.log(`El numero ${i} es impar`);
//   }
// }

// calcular multiplos
// const multiplo = 3;

// for (let i = 0; i <= 48; i++){
//   if(i % multiplo === 0) {
//     console.log(`El numero ${i} es multiplo de ${multiplo}`)
//   }
// }

// Sumar numeros
// let suma = 0;
// console.log(`hola hola hola ${suma}`)

// for(let i = 1; i <= 10; i++){
//   console.log(`Vuelta: ${i}`)
//   console.log(`Suma vale: ${suma}`)
//   console.log(`Numero a sumar ${i}`)
//   console.log(`Suma vale ahora: ${suma += i}`)
//   console.log(`===`)
// }

// While
/*
while (condicion){
  .. codigo
  actualizar
}
*/

// Contador

// let i = 1;

// while(i <= 10){
//   console.log(i)
//   i++
// }

// let i = 10;
// while(i >= 1){
//  console.log(i)
//  i--
// }

// while(false){
//   console.log('hola')
// }

// do while
/*
do {
  .. codigo a ejecutar
} while (condicion)
*/

// let i = 1;

// do {
//   console.log(i)
//   i++
// } while (i <= 0)

// const arr = [1,2,3,3,45,56,2345,2345,]

// For
/*
Para ejecutar un codigo una cantidad N de veces
Tiene 3 partes: inicio, condicion y actualizacion
Lo usamos para recorrer cosas
*/

// While
/*
Lo usamos cuando no sabemos la cantidad exacta de iteraciones.
Se ejecuta cuando la condicion sea verdadera
*/

// do while
/*
Parecido al while pero nos aseguramos que al menos el recorrido se ejecute al menos una vez, despues preguntamos si la condicion es verdad o falsa
*/

// Array
const mascotas = [
  "Perro",
  "patos",
  "urones",
  "camion",
  "moto",
  "otro",
  "messi",
  "dibu",
  27,
  false,
];

// const scaloneta = [
//   "messi",
//   'dibu',
//   'cuti'
// ]

// console.log(mascotas)
// console.log(mascotas.length)
// console.log(mascotas[2])
// console.log(mascotas[7])
// console.log(mascotas.length)

// console.log(mascotas[1])

// TRUCO PARA ACORDARSE COMO ESCRIBIR LENGTH
// Gallina Tiene Huevo

// for (let i = 0; i < scaloneta.length; i++){
//   console.log(scaloneta[i])
// }

// console.log(scaloneta)
// console.log(scaloneta.length)

// For of

/*
for (let VARIABLE_A_CREAR of ARRAY) {
  .. codigo
}
*/

const scaloneta = [
  "messi",
  "dibu",
  "cuti",
  "fideo",
  "kun",

  "juli",
  "taglia",
];

// for (let jugador of scaloneta ){
//   console.log(jugador)
// }

const jugadorABuscar = prompt("Que jugador estas buscando?").toLowerCase()
console.log(jugadorABuscar)
let jugadorEncontrado = false;

for (let jugador of scaloneta) {
  if (jugador === jugadorABuscar) {
    jugadorEncontrado = true
    break;
  }
}

if (jugadorEncontrado){
  console.log(`El jugador ${jugadorABuscar} esta en el plantel`)
} else {
    console.log(`El jugador ${jugadorABuscar} no esta convocado`)
}