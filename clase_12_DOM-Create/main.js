// Crear el div
const card = document.createElement("div");
card.classList.add("card");

// Crear la img
const cardImg = document.createElement("img");
cardImg.src = "https://via.placeholder.com/150";
cardImg.classList.add("card-img");

// Crear un titulo
const cardTitle = document.createElement("h2");
cardTitle.innerText = "Titulo de la tarjeta";
cardTitle.classList.add("card-title");

// Creamos un body para la card
const cardBody = document.createElement("div");
cardBody.classList.add("card-body");

const cardBodyText = document.createElement("p");
cardBodyText.innerText = "Contenido de la tarjeta";

cardBody.appendChild(cardBodyText);

// Crear un boton
const cardButton = document.createElement("button");
cardButton.innerText = "Accion";

// Anexamos los elementos a la card
card.appendChild(cardImg);
card.appendChild(cardTitle);
card.appendChild(cardBody);
card.appendChild(cardButton);

// creamos un container para las cards
const cardContainer = document.createElement("div");
cardContainer.classList.add("card-container");
cardContainer.appendChild(card);

const main = document.querySelector("main");
main.appendChild(cardContainer);

// Segunda forma con innerHTML
const dato = "Messi";
const caja = document.querySelector(".caja");
// caja.innerHTML = '<h1>Titulo</h1><p>Holi</p><img src="https://via.placeholder.com/50">'
// caja.innerHTML = `
// <div class='card'>
// <img src="https://via.placeholder.com/50">
// <h1>${dato}</h1>
// <p>Holi</p>
// </div>
// `;

// innerHTML + backticks (template literals o acentos graves)
const titulo = "Titulo de la caja";
const animales = ["Dinosaurio", "Perro", "Gato", "iguana", "Tortuga"];

caja.innerHTML = `
  <div class='card'>
    <img src="https://via.placeholder.com/150" class='card-img'>
    <h2>${titulo}</h2>
    ${animales.map((animal) => `<p>${animal}</p>`).join("")}
  </div>
`;

// Funcion generadora
const cardsContainer = document.querySelector(".cardContainer");

const cardInfo = {
  title: "Holi",
  description: "Tuki",
  img: "https://via.placeholder.com/50",
};

const cardInfo2 = {
  title: "Holisssssss",
  description: "Tukiissssss",
  img: "https://via.placeholder.com/50",
};

const createCardTemplate = ({ title, img }) => {
  // const { title, img, description } = cardData;

  return `
  <div class='card'>
    <img src=${img} class='card-img'>
    <h2>${title}</h2>
  </div>
  `;
};

cardsContainer.innerHTML = createCardTemplate(cardInfo);
// cardsContainer2.innerHTML = createCardTemplate(cardInfo2);

// Funcion generadora con map
const cardsContainer2 = document.querySelector(".cardContainer2");

const animalesObj = [
  {
    name: "Perro",
    description: "Ladra",
  },
  {
    name: "Gato",
    description: "Maulla",
  },
  {
    name: "Pez",
    description: "Nada",
  },
  {
    name: "Pez",
    description: "Nada",
  },
];

const createCard2 = (animal) => {
  const { name, description } = animal;

  return `
  <div class='card'>
    <img src='https://via.placeholder.com/50' class='card-img'>
    <h2>${name}</h2>
    <p>${description}</p>
  </div>
  `;
};

cardsContainer.innerHTML = animalesObj
  .map((animal) => createCard2(animal))
  .join("");


const jsonData = JSON.parse(`
{
  "name":"Nelson",
  "edad": 20,
  "numeros": [1,2,3]
}
`)

console.log(jsonData)
console.log(jsonData.name)

// Localstorage

const obj = [
  {
    id: 1,
    nombre: "Tomas",
  },
  {
    id:2,
    nombre: "Ema"
  }
]


localStorage.setItem('algo','valor')

localStorage.setItem('usuarios', JSON.stringify(obj))


// Obtener datos del localstorage (LS)
const usuarios = JSON.parse(localStorage.getItem('usuarios'))

const divContent = document.querySelector('.content')


divContent.innerHTML = usuarios.map(user => {
  return `
  <p>${user.nombre}</p>
  `
}).join('')

sessionStorage.setItem('user', 'messi')
// sessionStorage.setItem('otra','cosa')
// sessionStorage.clear()

console.log(Date.now())

// Array de algo que les guste
// const arrDeCosas = [
//   {
//     nombre:
//     imagen:
//     descripcion:
//   }
// ]


// del input sacar el value, para imprimirlo en algun lugar