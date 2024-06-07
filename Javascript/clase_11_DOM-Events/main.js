// const button = document.getElementById('button')
// console.log(button)
// button.addEventListener('click', algo)
// button.addEventListener('click', () => {})
// button.onChange = algo
// function algo(){}
// const algo = ()=>{}

//////////////////////
//1.llamar al elemento
const h3 = document.getElementById("h3");
// console.log(h3)

// ELEMENTO.addEventListener('EVENTO', FUNCION)
// ELEMENTO.addEventListener('EVENTO', ()=>{})

// h3.addEventListener('click', () => {
//   console.log('Escuchando desde js')
// })

// 2. tener la funcion lista con lo que vayamos a hacer cuando se ejecute el escuchador de eventos
const consolear = () => console.log('holi')

// 3. Al elemento pasarle un escuchador de evento con el tipo de evento y la funcion a ejecutar
h3.addEventListener("click", consolear);

// function consolear(){
//   console.log('holi')
// }

// <------------------- Focus / Blur ----------------- >
const inputBlur = document.getElementById('inputBlur')
// console.log(inputBlur)

inputBlur.addEventListener('focus', () => {
  console.log('tas focuseado')
  inputBlur.style.backgroundColor = 'blue'
})

inputBlur.addEventListener('blur', () => {
  console.log('te deseleccionaron')
  inputBlur.style.backgroundColor = ''
})

// <------------------- change ----------------- >
const inputChange = document.querySelector('#inputChange')
// console.dir(inputChange)

inputChange.addEventListener('change', (event) => {
  // console.log(event.target.value)
  console.log(event)
  // console.log('cambio el valor')
})

const btn = document.getElementById('btn')

// btn.addEventListener('click', (e) => {
//   console.log(e.target.innerText)
// })

// Event default
const form = document.querySelector('.form')
const input = document.querySelector('.inputForm')

form.addEventListener('submit', (e) => {
  e.preventDefault()
  if(input.value === '') {
    console.log('Flaco llena el input')
  } else {
    console.log(`El valor del input es ${input.value}`)
    input.value = ''
  }
})


// <------------------- stop propagation----------------- >
const container = document.querySelector('.container')
const padre = document.querySelector('.padre')
const hijo = document.querySelector('.hijo')

container.addEventListener('click', () => {
  console.log('CONTAINER')
})

padre.addEventListener('click', (e) => {
  console.log('PADRE')
  e.stopPropagation()
})

hijo.addEventListener('click', (e) => {
  console.log('HIJO')
  e.stopPropagation()
})

padre.style.backgroundColor = 'lightblue'
padre.style.padding = '20px'
hijo.style.backgroundColor = 'green'

// <------------------- stop propagation----------------- >
const caja = document.getElementById('caja')
const divBtn = document.getElementById('divBtn')

// caja.style.backgroundColor = 'blue'
// caja.style.border = '1px solid red'
// caja.style.padding = '20px'

divBtn.addEventListener('click', () => {
  caja.classList.add('div')
})


// messi
const imagen = document.querySelector('.messi')
// const show = document.getElementById('show')
// const hide = document.getElementById('hide')
const toggle = document.getElementById('toggle')

// hide.addEventListener('click', () => {
//   imagen.style.opacity = '0'
// })

// show.addEventListener('click', () => {
//   imagen.style.opacity = '1'
// })

// toggle.addEventListener('click', () => {
//   imagen.classList.toggle('ocultar')

//   if(imagen.classList.contains('ocultar')){
//     toggle.innerText = "Mostrar"
//   }

//   if(!imagen.classList.contains('ocultar')){
//     toggle.innerText = 'Ocultar'
//   }
// })

// cambiar src
const btnSrc = document.getElementById('cambiarSrc')

// btnSrc.addEventListener('click', () => {
//   imagen.src = './img/messi2.webp'

//   setTimeout(() => {
//     imagen.src = './img/messiInter.webp'
//   }, 3000)
// })

const contenedor = document.querySelector('.elemento')
const btnColores = document.querySelector('.colores')

const colores = ['red','blue','yellow','green','lightblue']

// console.log(Math.floor(Math.random() * colores.length))

btnColores.addEventListener('click', () => {
  const colorRandom = Math.floor(Math.random() * colores.length)
  console.log(colorRandom)
  contenedor.style.backgroundColor = colores[colorRandom]
})