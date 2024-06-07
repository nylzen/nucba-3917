// import { nombre } from "./funciones.js";
// console.log(nombre)

// Opcion 1 - Importar todo
// Importo todo como (as) nombre que le quiera dar
import * as fn from './funciones.js'
// import * as otro from './otro.js'
// otro.otroSaludo('Pablo')

console.log(fn)
fn.saludar('Pablo')
fn.despedir('Lean')
fn.saludar(fn.nombre)

console.log('---------')

// Opcion 2 - Importar una funcion especifica y renombrarla
import {saludar as saludo, despedir as despedida, nombre as Messi} from './funciones.js'

saludo('Mundo')
despedida('Mundo')
saludo(Messi)

console.log('---------')

// Opcion 3 - Importar una funcion especifica (mas usado)
import { saludar } from './funciones.js'
import { otroSaludo } from './otro.js'

saludar('Mundo')
otroSaludo('Pablo')