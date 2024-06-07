// ### Ejercicio 1: Determinar Número Positivo o Negativo
// Solicita al usuario un número y determina si es positivo, negativo o cero. :Check

// const numero = prompt("Ingresa un numero");

// if(condicion){
//   .. codigo
// } else {
//   .. codigo
// }
// if(condicion){
//   .. codigo
// } else if(nueva condicion){
//   .. codigo
// } else {
//   .codigo
// }

// if(numero > 0) {
//   console.log('Positivo')
// } else if (numero < 0){
//   console.log('Negativo')
// } else {
//   console.log('es 0')
// }

const tipoNumero = (numero) => {
  if (numero > 0) {
    console.log("Positivo");
  } else if (numero < 0) {
    console.log("Negativo");
  } else {
    console.log("es 0");
  }
};

// const numerito = parseInt(prompt('ingresa un numero'))
// console.log(typeof numerito)
// tipoNumero(numerito)
// tipoNumero(-10)
// tipoNumero(0)

// ### Ejercicio 2: Calculadora de Descuento
// Solicita al usuario el precio de un producto y un porcentaje de descuento. Calcula y muestra el precio con el descuento aplicado.
// const descuento = (precio, descuento)=>{

//   const calcdescuento = (precio*descuento)-precio

//    console.log(calcdescuento)
// }


const calcularDescuento = (precio, descuento) => {
  const calcuDescuento = precio * (descuento / 100)
  // console.log(`El descuento es de ${calcuDescuento}`)
  // console.log(`El precio total es: ${precio - calcuDescuento}`)
  return calcuDescuento
}

// calcularDescuento(1000, 50)
// calcularDescuento(7439, 20)
// console.log(calcularDescuento(433, 25))

// ### Ejercicio 9: Sistema de velocidad
// Escribe una función que verifique la entrada/parámetro proporcionado:

// - Si la entrada está por debajo del límite de velocidad de 70, imprime: 'Conduccion segura'.
// - Si la entrada está por encima del límite de velocidad de 70, cada 5 kilómetros de exceso corresponde a un punto de penalización. Imprime: 'Límite de velocidad superado por Punto de Penalización' + Punto.
// - Si el conductor acumula más de 10 puntos de penalización, es decir, supera el límite de velocidad de 120, imprime: 'Licencia suspendida'.

// nosotros pasamos una velocidad = 85, 3 pts
// velocidad = 70
// limiteMaximo = 120
// penalizacion = (velocidad - limite) / 5

// console.log((85 - 70) / 5)

const verificarVelocidad = (velocidad) => {
  const limitePermitido = 70;
  const limiteMaximo = 120;
  const puntosPenalizacion = Math.floor((velocidad - limitePermitido) / 5)

  if(velocidad <= limitePermitido) {
    return 'Conduccion segura'
  } else if (velocidad <= limiteMaximo) {
    return `Limite superado te ganaste ${puntosPenalizacion} puntos`
  } else {
    return 'Licencia suspendida'
  }
}

// console.log(verificarVelocidad(125))
// console.log(verificarVelocidad(70))
// console.log(verificarVelocidad(90))
// console.log(verificarVelocidad(94))

// ### Ejercicio 4: Verificación de Contraseña
// Solicita al usuario que ingrese una contraseña. Luego, verifica si la contraseña ingresada es igual a una contraseña predefinida y muestra un mensaje de acceso permitido o denegado.

// const passwordDefault = 'Messi2218'
// const userPassword = prompt('Password')

// userPassword === passwordDefault
// ? console.log('Ingreso exitoso')
// : console.log('Anda pa lla, nos vemo')
// console.log('messi'.toUpperCase())

// ### Ejercicio 7: FizzBuzz
// Escribe un programa que recorra los números del 1 al 20 (inclusive). Por cada número, verifica las siguientes condiciones:

// - Si el número es divisible solo por 3, muestra "Fizz".
// - Si el número es divisible solo por 5, muestra "Buzz".
// - Si el número es divisible por 3 y por 5, muestra "FizzBuzz".

// for(let i = 1; i <= 120; i++){

//   if( i % 15 === 0) {
//     console.log(`${i} FizzBuzz`)
//   }else if( i % 3 === 0){
//     console.log(`${i} Fizz`)
//   } else if (i % 5 === 0) {
//     console.log(`${i} Buzz`)
//   }
// }

// ### Ejercicio 6: Conversión de Edad a Días
// Escribe un programa que tome una edad en años como entrada y calcule la edad equivalente en días. Luego, muestra un mensaje que indique la edad original y su equivalente en días.

// edad = 25

const calcularEdadEnDias = (edad) => {
  const totalDias = edad * 365

  console.log(`Tu edad ${edad} en dias son ${totalDias}`)
}

// calcularEdadEnDias(25)

// ### Ejercicio 12: Piedra papel o tijera
// Preguntar a cada jugador la eleccion para el juego:
// - 1: Piedra
// - 2: Papel
// - 3: Tijera
// Determinar que jugador gano

// const jugador1 = Math.floor(Math.random() * 3)
// const jugador2 = Number(prompt("Jugador 2: 1 para piedra, 2 para papel, 3 para tijera"))

// console.log(`Computadora: ${jugador1}, Jugador2: ${jugador2}`)

// if(jugador1 === jugador2){
//   console.log('Empate')
// } else if (
//   (jugador1 === 0 && jugador2 === 2) ||
//   (jugador1 === 1 && jugador2 === 0) ||
//   (jugador1 === 2 && jugador2 === 1)
//   ){
//   console.log('Jugador 1 gana')
// } else {
//   console.log('Jugador 2 gana')
// }

// console.log(Math.floor(Math.random() * 3))

// const arr = [1,2,3,4,5,6,7,8,9]

// for(let i =0; i < arr.length; i++){
//   console.log(arr[i])
// }

// for (let numero of arr) {
//   console.log(numero)
// }

// arr.forEach(numero => console.log(numero))

// ### Ejercicio 5: Identificar Números Pares e Impares
// Escribe un programa que recorra los números de 1 a X numero. Por cada número, verifica si es par o impar, y muestra un mensaje que indique esta clasificación.

const recorrerNumeros = (limite) => {
  for(let i = 0; i <= limite; i++){
    if(i % 2 === 0){
      console.log(`El numero ${i} es par`)
    } else {
      // continue;
      // break;
      console.log(`El numero ${i} es impar`)
    }

  }
}

recorrerNumeros(10)

// ### Ejercicio 8: Tabla de Multiplicar Personalizada
// Escribe un programa que tome un número como entrada y genere su tabla de multiplicar del 1 al 10. Para cada multiplicación, muestra un mensaje que indique la multiplicación en formato "número x multiplicador = resultado"

const numero = 5

// for(let i = 1; i <= 10; i++) {
//   console.log(`${numero} x ${i} = ${numero * i}`)
// }