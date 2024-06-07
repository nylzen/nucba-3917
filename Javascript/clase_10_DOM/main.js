// getElementById()
// Che, del html traeme el elemento que tenga el id logo
const logo = document.getElementById("logo");
const h1 = document.getElementById("titulo1");
// console.log(h1.textContent)

// console.log(logo.innerText)
// console.log(logo.href)
// console.log(logo.href)
// console.dir(logo)

// getElementsByClassname()
// HTMLCollection. No se puede iterar de una, tenemos que transformarla a un array con spread o Array.from()

const listaLi = document.getElementsByClassName("link");
// console.log(listaLi[0].innerHTML)
// console.log(listaLi[1].innerText)
// console.log(listaLi[2].textContent)

// console.log(listaLi.length)
// listaLi.forEach((elemento) => console.log('messi')) <== NO ANDA PORQUE ESTO ES UN HTML COLLECTION NO ES UN ARRAY
const links = [...listaLi];

// links.forEach(link => console.log(link.textContent))

// getElementByTagName()
const pTags = document.getElementsByTagName("p");
// console.log(pTags)
// console.log(pTags[0].innerText)

const pTagArray = [...pTags];
// console.log(pTagArray)
// pTagArray.forEach((tag) => console.log(tag.innerHTML))

// querySelector()
const caja1 = document.querySelector("#caja1");
// console.log(caja1.innerText)

const caja2 = document.querySelector(".caja2");
// console.log(caja2)
const pDiv = caja2.querySelector("p");
// console.log(pDiv.innerText)

// querySelectorAll()
const li = document.querySelectorAll(".link2");
// console.log(li)
// console.log(li.entries)
// console.log(li.item)

// li.forEach(elemento => console.log(elemento.textContent.split('').reverse().join('')))

// const liArray = Array.from(li)
const liArray = [...li];

// Agarrar la lista y cambiarle el texto
// 1. traerme el elemento que quiero modificar
const lista = document.getElementById("lista");

// comprobar que lo llamamos bien
// console.log(lista)

// Mostrar el texto que tiene la etiqueta. Podemos usar tambien textContent o innerText
// console.log(lista.innerHTML)

// aca le dijimos a lista que su innerText lo vamos a modificar por MESSI
lista.innerText = "Messi".toUpperCase();
const texto = "soy una variable";
lista.innerHTML = `Messi <strong>${texto}</stron>`;

// console.log(lista.innerHTML)

// const arr = [1,3,4,]
// console.log(arr.join(' / '))

const links2 = document.querySelectorAll(".link2");
const links2Array = [...links2];

// links2Array.forEach((link) => {
//   const linkTexto = link.textContent
//   // console.log(linkTexto)
//   const linkMayuscula = linkTexto.toUpperCase()
//   // console.log(linkMayuscula)
//   // link.textContent = linkMayuscula
//   link.textContent = `Ahora valgo: ${linkMayuscula}`
// })

links2Array.map((link) => {
  link.innerHTML = [1, 2, 3];
  // link.style.color = 'red'
  // link.classList.add('tuki')
});

const nombres = ["Mauro", "Fede", "Milena", "Dario", "Matias", "Fran", "Tomas"];

const listaUl = document.getElementById("nombres");
// console.log(listaUl)

listaUl.innerHTML = nombres
  .map((nombre) => {
    return `<li>${nombre}</li>`;
  })
  .join("");

const liEl = document.createElement("p");
liEl.textContent = "Messi";
listaUl.appendChild(liEl);

const titulo = document.createElement("h1");
titulo.innerText = "Soy un titulo";
listaUl.appendChild(titulo);
