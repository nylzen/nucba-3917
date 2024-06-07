// function hola() {
//   console.log('Holi')
// }
// var nombre;

// console.log(nombre)

// nombre = 'Jorge'
// console.log(nombre)

// hola()

// funciones y variables de tipo var lo que hace js es llevarlo al principio del archivo e iniciarlos con undefined.
//
// let holi; // declarada
// holi = 'messi' // inicializada
// console.log(holi)

// scope
//

var a = "Soy una variable";

function holi() {
  var b = "Estoy adentro de una funcion";
  console.log(b);
}

// holi() // Ahora si, pq el console.log esta dentro del bloque

{
  var c = "Estoy adentro de unas llaves";
}

{
  let d = "Soy let";
  const e = "Soy const";

  let nombre = "Messi";
  // console.log(nombre)
}

let d = "hola";
// let nombre = 'Messi2'

// console.log(nombre)

// console.log(a) // Es global
// console.log(b) // No se ve, no esta definida
// console.log(c) // SE ve, pq es var
// console.log(d)
// console.log(e)

let numero = 11;
// numero = numero + 2
// numero += 2 // numero = numero + 2
// numero -= 7
// numero *= 2
// numero /= 2
// console.log(numero)

// Operadores de asignacion
// numero += 10 // agarra lo que hay en la variable, le suma lo que le pasemos y lo asigna
// numero -= 5
// numero *= 2
// numero /= 2

// console.log(numero % 2)

// console.log(5 > 10)
// console.log(5 > 2)
// console.log(5 == "5")
// console.log(5 === "5")
// console.log(0 == false)

// Operadores de comparacion
// == | Es igual a == b
// console.log(18 == "18")

// === | Es estrictamente igual a === b
// console.log(18 === '18')

// != | Es diferente a != b
// console.log(18 != 18)

// !== | Es estrictamente diferente a !== b
// console.log(18 !== '18')

// > | Es mayor que a > b
// console.log(9 > 10)

// < | Es menor que a < b
// console.log(9 < 10)

// >= | Es mayor o igual a >= b
// console.log(10 >= 10)

// <= | Es menor o igual a <= b
// console.log(10 <= 1)

// && | Operador AND
// console.log(18 > 7 && 7 > 5 && 5 > 10)

// || | Operador OR
// console.log(18 > 7 || 7 < 5)

// ! | Negacion
// console.log(!false)

// console.log('holi')

// if(10 > 5){
//   console.log('es mayor')
// }

// console.log('Son las 20:45')

// Condiciones
// if (condicion){
//   .. codigo
// } else {
//   .. codigo
// }

// if(1 > 5){
//   console.log("Es mayor")
// } else {
//   console.log("Es menor")
// }

// let llueve = true;

// if(!llueve) {
//   console.log('GRACIAS POR BAjAR ESTE CALOR')
// } else {
//   console.log("Que calor")
// }

// let edad = 18

// if(edad >= 18) {
//   console.log('Puede tomar una birrita')
// } else {
//   console.log('No podes')
// }

// const otroNumero = 22;

// if (otroNumero % 2 === 0) {
//   console.log("Es par")
// } else {
//   console.log("Es impar")
// }

// Si la persona tiene entre 1 y 12 es nino
// Si la persona tiene entre 13 y 17 es adolescente
// si la persona tiene 18 a 50 es adulto
// si no es una persona mayor

// let edad = 25;
// let edad = 51;

// if (edad >= 1 && edad <= 12) {
//   console.log('es nino')
// } else if (edad >= 13 && edad <= 17 ){
//   console.log('Es adolescente')
// } else if (edad >= 18 && edad <= 50) {
//   console.log('Es adulto')
// } else {
//   console.log('Es una persona mayor')
// }

// Switch

const mascota = "Buho";

// si mascota existe imprimo
// if(mascota){
//   console.log('HOli')
// }

// if (mascota === "Perro") {
//   console.log("Tengo un perro");
// } else if (mascota === "Gato") {
//   console.log("Tengo un gato");
// } else if (mascota === "Uron") {
//   console.log("TEngo un uron");
// } else if (mascota === "Pato") {
//   console.log("Tengo un pato");
// } else {
//   console.log("No tengo nada");
// }

// Pasemos esto a switch
// switch(mascota) {
//   case "Perro":
//     console.log('Tengo un perro')
//     break;
//   case "Gato":
//     console.log('Tengo un gato')
//     break;
//   case "Buho":
//     console.log('Tengo un buho')
//     break
//   default:
//     console.log("No tengo nada")
//     break
// }

// let edad = 25;

// switch (true) {
//   case edad >= 1 && edad <= 12:
//     console.log("es nino");
//     break;
//   case edad >= 13 && edad <= 17:
//     console.log("es adolescente");
//     break;
//   case edad >= 18 && edad <= 50:
//     console.log("Es adulto");
//     break;
//   default:
//     console.log("Es persona mayor");
// }

let edad = 18;

// if(edad >= 18){
//   console.log('Es mayor de 18')
// } else {
//   console.log('Es menor')
// }

// edad >= 18 ? console.log('Es mayor') : console.log('Es menor')
// console.log(edad >= 18 ? 'Si' : 'No')

console.log(
  edad > 18 ? "Sos mayor de 18" : edad < 18 ? "Sos menor de 18" : "Tenes 18"
);

// compara valor 5numero es igual a 5 string
// console.log(5 == '5')

// comparar valor 5numero es igual a 5 string NO
console.log(5 === '5')
console.log(76 == '76')