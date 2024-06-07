// const string = 'messi'
// const string = new String('Messi')
// console.log(string)

// Metodos de string
// .length()
// Devuelve el largo de una cadena/string
const string = 'Hola Messi'
// console.log(string.length)

// const dni = "12123123"
// console.log(dni.length)
// Un campo dni 8 caracteres
// if(dni.length === 8){
//   console.log('dni valido')
// } else {
//   console.log('dni no valido')
// }

// .toUpperCase() / .toLowerCase()
// Pasar todo a mayuscuals
// console.log(string.toUpperCase())

// Pasar todo a minusculas
// console.log(string.toLowerCase())

// .replace(patron, reemplazo)
// Devolver un nuevo string con el string reemplazado, cambiando la primera ocurrencia que encuentre

const nuevoString = 'Hola soy un string string'
// console.log(nuevoString)
const resultado = nuevoString.replace('string', 'cadena')
// console.log(resultado)
// const resultado = nuevoString.replace('o', '/')
// console.log(resultado)
// const resultado = nuevoString.replace('hola', 'chau') // no anda case sensitive

// solucion
// const resultado = nuevoString.toLowerCase().replace('hola', 'chau')
// console.log(resultado)

// .replaceAll(patron, reemplazo)
// Reemplaza todas las ocurrencias
const texto = 'Messi es el mejor futbolista del mundo porque Messi sabe cuanto pesa la del mundo.'

// const textoReemplazado = texto.replaceAll('Messi', 'Maradona')
const textoReemplazado = texto.replaceAll('o', '😁')

// console.log(textoReemplazado)

// .indexOf()
// Devuelve la posicion de la primera ocurrencia de lo que le pasemos, si no encuentra nada devuelve -1

// const textIndex = 'No encontraria messi si puesiera 8'
// console.log(textIndex.indexOf('messi', 16))

// const textIndex = 'Hola mundo'
// console.log(textIndex.indexOf('world'))

//.trim()
// Borra los espacios al principio y al final del string
const stringTrim = '            Holaaaa           '
// console.log(stringTrim.length)
// console.log(stringTrim)

const stringTrim2 = stringTrim.trim()
// console.log(stringTrim2.length)
// console.log(stringTrim2)

// .split()
// Divide el string y lo convierte en un array a partir del parametro que le pasemos
// const stringSplit = 'Hola_Mundo Otra cosa no_se messi'
// console.log(stringSplit.split('_'))

// const stringSplit = 'Hola/Soy/Un/String'
// console.log(stringSplit.split('/'))

// const stringSplit = 'Hola soy un string'
// console.log(stringSplit.split('').reverse().join(''))

// 1)verificar si la palabra es palindromo las que se leen igual de atras para adelante
// la palabra leida normal contra la palabra leida al reves

const string2 = 'messi'
const stringReverse = string2.split('').reverse().join('')
// console.log(stringReverse)

// if(string2 === stringReverse){
//   console.log('es palindromo')
// } else {
//   console.log('No es palindromo')
// }


// const color = '     rojo '
const color = 18
// console.log(color)

// if(typeof color === 'string') {
//   console.log(color.trim())
//   console.log('trim aplicado')
// }


// .repeat()
// repite x cantidad de veces
// const nombreRepeat = 'Alan '
// console.log(nombreRepeat.repeat(7))

// .charAt()
// Devuelve el caracter que se encuentra en la posicion que le pasemos

// const nombreAt = 'Mauro'
// console.log(nombreAt.charAt(4))
// console.log(nombreAt.charAt(7))

// .concat()
// Concatenamos cosas
const stringConcat = 'Hola'
// console.log(stringConcat.concat(' ','Mundo','!'))
// console.log(stringConcat.concat([' ','Mundo','!']))
const result = stringConcat.concat([1,2,3])
// console.log(typeof result)

const arr = [1,2,3]
const result2 = arr.concat([4,5,6])
// console.log( typeof result2)
// console.log(arr)

// .startsWith()
// Verificar si el string empieza con lo que le pasemos, devuelve un booleano
const textoStart = 'Recursos de la clase'
// console.log(textoStart.startsWith('Recursos'))
// console.log(textoStart.startsWith('clase'))
// console.log(textoStart.startsWith('recursos'))
// console.log(textoStart.toLowerCase().startsWith('r'))

// .endsWith()
const textoEnd = 'Veamos la consola'
// console.log(textoEnd.endsWith('a'))
// console.log(textoEnd.endsWith('sola'))
// console.log(textoEnd.endsWith('veamos'))
// console.log(textoEnd.toUpperCase().endsWith('A'))

// .includes()
// Devuelve un booleano si encuentra lo que le pasemos por parametro

const textoIncludes = 'Hola soy messi'
// console.log(textoIncludes.includes('messi'))
// console.log(textoIncludes.includes('o'))
// console.log(textoIncludes.toLowerCase().includes('hola'))

const arrayIncludes = ['azul','amarillo','blue']
// console.log(arrayIncludes.includes('rojo'))
// console.log(arrayIncludes.includes('azul'))

// if(arrayIncludes.includes('azul')){
//   console.log('Tiene el azul')
// }

// hola mundo de javascript, mundo
/*
 1. Crear una funcion que reciba 2 parametros
 2. Un parametro es un texto y el otro es una palabra a buscar en ese texto
 3. Esto tiene que funcionar independientemente de como se escriba mayusculas o minusculas
 4. Si lo encuentra que diga que lo encontro y si no que no lo encontro
*/

const checkString = (texto, palabra) => {

  const textoMinus = texto.toLowerCase()
  const palabraMinus = palabra.toLowerCase()

  const estaEnElString = textoMinus.includes(palabraMinus)

  if(estaEnElString){
    console.log(`Se encontro la palabra "${palabra}" en el texto`)
  } else {
    console.log(`No se encontro ${palabra}`)
  }

}

// checkString('Hola soy Messi','messi')


//.slice()
// Extrae una porcion del string y devuelve el nuevo string
const texto2 = 'Veamos la consola'
// console.log(texto2.length)
// console.log(texto2.slice(0, 6))
// console.log(texto2.slice(7, 9))
// console.log(texto2.slice(10))
// console.log(texto2.slice(-7))

// const arr2 = [1,2,3,4,5]
// console.log(arr2.slice(-1))

// Extraer el nombre de usuario de un correo electronico
// messi@gmail.com => messi

// const email = 'messi@gmail.com'
const email = 'lionelmessi10_@gmail.com'
const nombreSpliteado = email.split('@')
// console.log(nombreSpliteado)
const nombreUsuario = nombreSpliteado[0]
// console.log(nombreUsuario)
// console.log(email)

// Contar cuantas veces aparece una letra en un string
const contarLetra = (texto, letra) => {
  // contador, algo de un for, de un lower y el return contador.....
}

contarLetra('Hola soy un TextO','o')

// 'la letra $tanto aparece $veces veces'