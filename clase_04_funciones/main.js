// Quiero armar un programa para sumar dos numeros
// Necesitamos tres variables num1, num2, resultado
// num1 = 10
// num2 = 5
// resultado = num1 + num2
// mostrar el resultado La suma es: resultado

// let nombre = 'Nelson'

// function hola (){
//   let nombre = "Messi"
//   console.log(nombre)
// }

// hola()

// Funciones
// Declaramos una funcion
// function nombre_de_funcion () {
// .. codigo
// }

// Invocacion de una funcion
// nombre_de_funcion()

// let nombre = 'Pepito'
// nombre = 'Messi'
// nombre = 'Lautaro'
// console.log(`Hola ${nombre}`)

function saludar(name) {
  console.log(`Hola ${name}`);
}

// saludar() // Hola undefined
// saludar('Messi')
// saludar(8)
// saludar(true)

function sumar(a, b = 100) {
  // let num1 = a
  // let num2 = b
  // let resultado = num1 + num2
  let resultado = a + b;
  // console.log(num1 + num2)
  return resultado;
}

// console.log(sumar(10, 5))
const resultado1 = sumar(276, 4);
// console.log(resultado1)
const messi = sumar(500, 128);
// console.log(messi)
// sumar('HOLA', 10)
sumar(50); // 50 + undefined

const result = sumar(resultado1, messi);
// console.log(result)

// function multiplicar (num1, num2) {
//   return num1 * num2
// }

// console.log(sumar(multiplicar(2,2),3))

// Funciones flecha
// () => {}
// const multiplicar = 'hola'

// const multiplicar = (num1, num2) => {
//   return num1 * num2
// }

// const multiplicar = (num1, num2) => num1 * num2
// console.log(multiplicar(2,8))
// console.log(multiplicar(12,8))
// multiplicar(2,2)

const saludar2 = (nombre) => {
  if (nombre === "Messi") {
    console.log("Si te llamas messi sos muy grande para imprimirte en consola");
    return;
  }
};

function saludar3(nombre) {
  let resultado = sumar(2, 2);
  console.log(resultado);

  if (nombre === "Messi") {
    console.log("Si te llamas messi sos muy grande para imprimirte en consola");
    return;
  }
  console.log(`Hola ${nombre}`);
}

// saludar2('Messi')
// saludar3('Messi')

// Funcion recursiva
// Contador hacia atras

// for(let i = 5; i >= 1; i--) {
//   console.log(i)
// }

// const cuentaAtras = (num) => {
//   //Caso base
//   //  if(num === 1) return
//   if (num === 0) {
//     return;
//   }

//   console.log(num);

//   return cuentaAtras(num - 1)
// };

// cuentaAtras(5);

/*
1. El parametro vale 5
2. Evalua si el 5 es igual a 0
3. No, entonces imprime el 5 en consola
4. La funcion se llama a si misma con el parametro - 1, o sea cuentaAtras(4)
--
1. El parametro vale 4
2. Evalua si el 4 es igual a 0
3.. asi sucesivamente hasta que valga 0 y termine de ejecutarse
*/
// const duplicar = (num) => {
//   num = num + num;
//   console.log(num)

//   // caso base
//   if(num > 100) {
//     console.log("Te pasaste")
//     return
//   }

//   return duplicar(num)
// }

// duplicar(5)

// Callback
const alertHola = (nombre) => {
  return alert(`Hola ${nombre}`)
}

// alertHola('Nelson')

const consoleHola = (nombre) => {
  return console.log(`Hola ${nombre}`)
}

// consoleHola('Nelson')

const procesarEntrada = (otraFuncion) => {
  const nombreUser = prompt('Ingresa tu nombre')
//  let nombreUser = 'messi';
  otraFuncion(nombreUser)
}

procesarEntrada(consoleHola)
// procesarEntrada(alertHola)

// Ejemplo donde usaremos callbacks
const names = ['Seba', 'Ema', 'Anto', 'Messi', "Charles"]

// names.forEach((nombre) => console.log(nombre) )
