const generarFuncion = () => {
  const nombre = 'Messi'

  const mostrarNombre = () => {
    return console.log(`Hola desde adentro de la funcion, la variable de arriba vale ${nombre}`)
  }

  return mostrarNombre
}

// console.log(generarFuncion())
// console.log('----')
const otraFuncion = generarFuncion()
// otraFuncion()
// generarFuncion()()

const crearContador = () => {
  let contador = 0

  const incrementar = () => {
   return console.log(++contador)
  }

  const mostrarValor = () => {
    return console.log(contador)
  }

  return { incrementar, mostrarValor}
}

// console.log(crearContador())
const counter = crearContador()
// counter.incrementar()
// counter.incrementar()
// counter.incrementar()
// counter.incrementar()
// counter.incrementar()
// counter.mostrarValor()

// console.log('-----')
const counter2 = crearContador()
// counter2.mostrarValor()


// const persona = {
//   // propiedad: valor,
//   // key: value
//   nombre: "Lionel",
//   edad: 37,
//   equipos: ["Barcelona","PSG", "Inter de Miami"],
//   premios: 8,
//   trofeos: {
//     seleccion: ['Mundial',"Copa america",'Finalissima'],
//     club: {
//       barcelona: ['todo lo que gano'],
//       psg: 'algo',
//       interMiami: 'Otra cosa'
//     }
//   }
// }

// console.log(persona)
// console.log(persona.nombre)
// console.log(persona.equipos)
// const equipos = persona.equipos

// console.log(persona.trofeos.club.barcelona)
// console.log(persona.equipos[0])
// // for(let item of persona.equipos) {
// //   console.log(item)
// // }

// persona.apellido = "messi"
// persona.musica = ['Cumbia santafesina','ACDC','Emilia']
// console.log(persona.apellido)
// console.log(persona.musica)


// METODOS
const persona = {
  // propiedad: valor,
  // key: value
  nombre: "Lionel",
  edad: 37,
  equipos: ["Barcelona","PSG", "Inter de Miami"],
  premios: 8,
  trofeos: {
    seleccion: ['Mundial',"Copa america",'Finalissima'],
    club: {
      barcelona: ['todo lo que gano'],
      psg: 'algo',
      interMiami: 'Otra cosa'
    },
  },
  // saludar: function(){
  //   // console.log(`Holi soy ${persona.nombre}`)
  //   console.log(this.nombre, this.edad, this.equipos)
  // }
  saludar: () => console.log(this)
}

// persona.saludar()


// length es un metodo o sea es parte de un objeto
// const arr = [1,2,3,4,5,6]
// console.log(arr.length)
const persona2 = {
  otraCosa: 1
}

const personas = [
  {
    id: 1,
    nombre: 'Lean'
  },
  {
    id: 2,
    nombre: 'Anto'
  },
  {
    id: 3,
    nombre: 'Dario'
  }
]

// console.log(personas)
// const hola = 'hola'
// console.log(`Algo ${hola} ${2 + 2}`)
// console.log('Algo' + " " + hola)

// const entries2 = Object.entries(persona2)
const entries = Object.entries(persona)
// console.log(entries)

// for(let item of entries) {
//   // console.log(item[0])
//   // console.log('---')
  // console.log(item[1])
// }

// const values = Object.values(persona)
// console.log(values)

// const keys = Object.keys(persona)
// console.log(keys)


// KEY = PROPIEDAD
// VALUES = VALORES

// const numeros = {
//   a: 10,
//   b: 20,
//   c: 30
// }

// const valores = Object.values(numeros)

// let suma = 0

// for(let i =0; i < valores.length; i++){
//   suma += valores[i]
// }

// console.log(valores)
// console.log(suma)

// Spread Operator

const nums = [1,2,3,5]
// console.log(nums)

const nums2 = [true, 4,8,10]
// console.log(nums2)

const nuevoArray = ['PRINCIPIO',...nums,'HOLA', ...nums2, 'FINAL']

// console.log(nuevoArray[])

const obj1 = {
  foo: 'bar',
  x: 10
}

// console.log(obj1)

const obj2 = {
  foo: 'baz',
  y: 20
}

// console.log(obj2)

// const obj3 = {...obj2, ...obj1, foo: 'Pepito'}

// const obj3 = {

//   ...persona,
//   nombre: 'Ciro'
// }

// console.log(obj3)
// tarea, completa, favorito
const obj4 = {
  ...obj1,
  x: 100
}

// console.log(obj4)


// Rest operator
// Voy a recibir de 0 a n cantidad de parametros, JS Lo toma como un array

const restOperator = (...parametros) => {
  console.log(parametros)

  for(let item of parametros){
    console.log(`El parametro recorrido es : ${item}`)
  }

  console.log(`Los valores pasados aca son ${parametros}`)
}

// restOperator([7,1,2],1,2,3,4,5,6,67)
// restOperator('Messi',1,2,3,4,5,6,67)

const otroRest = (nombre, ...args) => {
  console.log(nombre)
  console.log(`Los valores extra son ${args}`)
}

// otroRest('Messi', 1,2,3,4,5,6,67,7)

const persona3 = {...persona}

// console.log(persona3)
// const nombre = persona3.nombre
// const edad = persona3.edad
// const premios = persona3.premios
// console.log(nombre, edad, premios)

// const {nombre, edad, premios, equipos} = persona3
// const {a,b,c} = persona3
// console.log(a,b,c) // undefined no existe en persona

// console.log(nombre, edad, premios, equipos)

const numeros = [1,2,3,4,5,6,7,8]

// const primero = numeros[0]
// const segundo = numeros[1]

const [primero, segundo, tercero, ...rest] = numeros

console.log(primero, segundo, tercero, rest)

// for (let item of rest ) {
//   console.log(`Sobraron de la desestructuracion ${item}`)
// }

const {nombre, trofeos} = persona
const {club} = trofeos
const {barcelona} = club

console.log(club)
console.log(barcelona)