const arr = [1, 2, 3, 4, 5];
// console.log(arr[0])
// console.log(arr[4])
// const [, ,primero, segundo] = arr
// console.log(primero, segundo)

// length
// la longitud del arr
// console.log(arr.length)

// if(arr.length){
//   console.log('hola')
// }

// for(let i = 0; i < arr.length; i++){
//   console.log(arr[i])
// }

// .indexOf()
// Nos devuelve el indice del valor que le pasemos
// const nombres = ['Horacio', 'Mauro', "Nantue"]
// console.log(nombres.indexOf('Mauro'))
// console.log(nombres.indexOf('Horacio'))

// .toString()
// Convierte un array a un string
// const nombres = ['Horacio', 'Mauro', "Nantue"]
// const nombreString = nombres.toString()
// console.log(nombreString)

// .concat()
// Nos sirve para poder unir arrays

// const animales = ["gato", "perro"];
// const masAnimales = ["Iguana", "gato", "pato", "oso"];
// const arrayNuevo = animales.concat(masAnimales);
// console.log(arrayNuevo)
// console.log(animales)
// console.log(masAnimales)

// const arrAnimales = [1, ...animales, ...masAnimales, true];
// console.log(arrAnimales)


// .push()
// Push agrega un nuevo elemento al array al final. MUTA EL ARRAY ORIGINAL
// arr2.push(1)
// console.log(arr2)
// arr2.push('nombre')
// console.log(arr2)
// arr2.push(true)
// console.log(arr2)
// arr2.push([1,2,3,4,5,6])
// console.log(arr2)
// const [primero] = arr2
// console.log(arr2[0])
// arr2.push({nombre:"messi"})
// console.log(arr2)

// const fun = () => {
//   let arr2 = [];

//   for (let i = 0; i < 5; i++) {
//     arr2.push(i);
//   }

//   return arr2;
// };

// console.log(fun())

// .unshift()
// agrega un nuevo elemento al array al principio. MUTA EL ARRAY ORIGINAL
// const arr2 = []
// arr2.unshift('messi')
// console.log(arr2)
// arr2.unshift(true)
// console.log(arr2)
// arr2.unshift(12394809123)
// console.log(arr2)
// arr2.unshift(undefined)
// console.log(arr2)


// .pop()
// Nos sirve para eliminar el ultimo elemento del array y ademas lo retorna
// const animales = ['pato','perro','tortuga']
// const animalEliminado = animales.pop()
// console.log(animales)
// console.log(animalEliminado.toUpperCase())

// .shift()
// Nos sirve para eliminar el primer elemento del array y ademas lo retorna
// const otrosAnimales = ['pato','leon','serpiente']
// const animalEliminado2 = otrosAnimales.shift()
// console.log(otrosAnimales)
// console.log(animalEliminado2)

// .join()
// Nos devuelve un string del array separado por lo que le pasemos por parametro
// const animales = ['pato','leon','serpiente', [1,2,3]]
// const numero = 8
// console.log(animales.join(', '))

//.reverse()
// da vuelta el array
// const nombres = ['Horacio', 'Mauro', "Nantue", "Luciano", "Ema"]
// const nombresAlreves = nombres.reverse().join('')
// console.log(nombresAlreves)
// const nombre = 'Messi'.split('')
// console.log(nombre.reverse().join(''))

// .slice()
// Nos devuelve una porcion del array NO MODIFICA EL ARRAY ORIGINAL
// const nombres = ['Horacio', 'Mauro', "Nantue", "Luciano", "Ema"]
// console.log(nombres.slice(0,2))
// console.log(nombres.slice(1,2))
// console.log(nombres.slice(-3))
// console.log(nombres.slice(1))
// console.log(nombres.slice(-2,-1))
// console.log(nombres.slice(-3,-2))
// console.log(nombres)

// ------------------------------------------------------
// Metodos de callback

// .forEach()
const nombres = ['Horacio', 'Mauro', "Nantue", "Luciano", "Ema"]


// el parametro del forEach es el elemento que esta recorriendo del array
// nombres.forEach((nombre) => {
//   console.log(`Hola soy ${nombre}`)
// })

// nombres.forEach(function(nombre){
//   console.log(`Hola soy ${nombre}`)
// })

// .map()
// Recorre el array y nos devuelve un nuevo array con lo que hayamos hecho en la funcion de callback

// const numeros = [1,2,3,4,5]
// const duplicados = numeros.map((numero) => {
//   return numero * 2
// })

// const duplicados = numeros.map((numero) => numero * 2)
// console.log(duplicados)

// ej como haciamos con el for of que escribimos el nombre en singular. Convencion
// for (let numero of numeros){}


// console.log(duplicados)
// console.log(numeros)


// creamos duplicados con forEach
// const numeros = [1,2,3,4,5]

// const numerosDuplicados = []

// numeros.forEach((numero) => {
//   numerosDuplicados.push(numero * 2)
// })

// console.log(numerosDuplicados)


// .filter()
// const numeros = [1,2,3,4,5,6,7,8,9]

// const pares = numeros.filter(numero => numero % 2 === 0)
// const pares = numeros.filter(numero => {
//  return numero % 2 === 0
// })

// console.log(pares)

// .find()
// const numeros = [1,2,3,4,5,6,7,8,9]
// const primerPar = numeros.find(numero => numero % 2 === 0)
// console.log(primerPar)

// const numeroMayorA3 = numeros.find(numero => numero > 6)
// const numeroMayorA3 = numeros.filter(numero => numero > 6)
// console.log(numeroMayorA3)

// .every()

// const numeros = [1,2,3,4,5,6,7,8,9]
// console.log(numeros.every(numero => numero > 0))
// const mayores = numeros.every(numero => numero > 1)
// console.log(mayores)

// if(mayores){
//   console.log('tuki')
// }

// .some()
// const numeros = [1,2,3,4,5,6,7,8,9]
// console.log(numeros.some(numero => numero > 8))
// console.log(numeros.some(numero => numero >= 9))


const productos = [
    {
      id: 1,
      nombre: 'Camiseta de algodón',
      precio: 19.99,
      categoria: 'Ropa',
      stock: 50,
    },
    {
      id: 2,
      nombre: 'Zapatillas deportivas',
      precio: 89.99,
      categoria: 'Calzado',
      stock: 25,
    },
    {
      id: 3,
      nombre: 'Teléfono inteligente',
      precio: 599.99,
      categoria: 'Electrónica',
      stock: 10,
    },
    {
      id: 4,
      nombre: 'Portátil',
      precio: 899.99,
      categoria: 'Electrónica',
      stock: 15,
    },
    {
      id: 5,
      nombre: 'Libro de ciencia ficción',
      precio: 12.99,
      categoria: 'Libros',
      stock: 30,
    },
    {
      id: 6,
      nombre: 'Cafetera automática',
      precio: 49.99,
      categoria: 'Electrodomésticos',
      stock: 20,
    },
    {
      id: 7,
      nombre: 'Juego de mesa',
      precio: 24.99,
      categoria: 'Juegos',
      stock: 40,
    },
    {
      id: 8,
      nombre: 'Gafas de sol',
      precio: 29.99,
      categoria: 'Accesorios',
      stock: 35,
    },
    {
      id: 9,
      nombre: 'Mochila resistente al agua',
      precio: 39.99,
      categoria: 'Accesorios',
      stock: 18,
    },
    {
      id: 10,
      nombre: 'Silla de oficina ergonómica',
      precio: 149.99,
      categoria: ['Muebles','accesorios'],
      stock: 12,
    },
  ];


// imprimir los nombres de los productos
// productos.forEach(producto => console.log(`Nombre: ${producto.nombre}`))

// guardar en un nuevo array los nombres de los productos
// const nombresMayus = productos.map(producto => {
//   const productoMayuscula = producto.nombre.toUpperCase()
//   return productoMayuscula
// })

// console.log(nombresMayus)

// Filtrar todos los productos mayores a 50
// const productosMayoresA50 = productos.filter(producto => producto.precio > 50)
// console.log(productosMayoresA50)

// filtrar los elementos entre 20 y 100 y que sean de la categoria accesorios
// (condicion1 && condicion2) && (otra && otra)

// .sort()
// const numeros = [4,6,1,3,45,8,20,11,23]
// console.log(numeros.sort())
// console.log(numeros.sort((a,b) => a - b))
// console.log(numeros.sort((a,b) => b - a))


// .reduce()
const numeros = [4,6,1,3,45,8,20,11,23]
const sumaTotal = numeros.reduce((total, actual) => {
  console.log({total})
  return total + actual
}, 0)

console.log(sumaTotal)