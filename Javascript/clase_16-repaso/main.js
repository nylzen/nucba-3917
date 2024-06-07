const obj1 = [
  {
    id: 1,
    name: "Lionel Messi",
    age: 25,
    club: "Inter Miami",
    country: "Argentina",
  },
  {
    id: 2,
    name: "Cristiano Ronaldo",
    age: 36,
    club: "Manchester United",
    country: "Portugal",
  },
  {
    id: 3,
    name: "Neymar Jr",
    age: 29,
    club: "Paris Saint-Germain",
    country: "Brazil",
  },
  {
    id: 4,
    name: "Kylian Mbappe",
    age: 22,
    club: "Paris Saint-Germain",
    country: "France",
  },
]





// CLAVE => MESSI, VALOR => obj1
// localStorage.setItem('pepito', JSON.stringify(obj1))
// localStorage.setItem('MESSI', JSON.stringify('HOLI'))

// const hola = localStorage.getItem('MESSI')
// console.log(hola)

// const dataLS = localStorage.getItem('MESSI')

// const texto = document.getElementById('texto')
// const texto = document.querySelector('#texto')

// const dataLS = JSON.parse(localStorage.getItem('pepito'))
// console.log(dataLS)

// texto.innerHTML = dataLS.map(item => {
//   return `<li>${item.name}</li>`
// }).join('')

// localStorage.setItem('Item', JSON.stringify(obj1))
// const data = JSON.parse(localStorage.getItem('Item'))

// data.forEach(item => console.log(item))

// const input = document.querySelector('input[type="number"]');
const input = document.querySelector("input");
const form = document.querySelector("#form");
const error = document.querySelector("#error");
const caja = document.querySelector("#caja");

// const isEmpty = (PARAMETRO) => PARAMETRO.length === 0;

const renderJugador = (jugador) => {
  caja.innerHTML = `
    <div>
      <h1>${jugador.name}</h1>
      <p>${jugador.age}</p>
      <p>${jugador.club}</p>
      <p>${jugador.country}</p>
    </div>
  `;
};

const showError = (message) => {
  error.innerHTML = message;
  caja.innerHTML = "";
  setTimeout(() => {
    error.innerHTML = "";
  }, 3000);
};

// const init = () => {
//   form.addEventListener('submit', handleSubmit)
//   window.addEventListener('DOMContentLoaded', renderLoad)
// }

// adelanto apis
// fetch("https://rickandmortyapi.com/api/character")
//   .then((response) => response.json())
//   .then((data) => {
//     // console.log(data.results)
//     const elementos = data.results
//     const img = document.querySelector('#img')
//     elementos.map(item => {
//       caja.innerHTML += `
//         <div>
//           <h1>${item.name}</h1>
//           <img src="${item.image}" alt="${item.name}">
//         </div>
//       `
//     })

//     // img.src = data.results[2].image
//   });

const handleSubmit = (e) => {
  e.preventDefault();
  const inputValue = input.value; // numero (STRING OJO), pq es el value del input
  // console.log(inputValue)

  if (inputValue === "") {
    // // alert("No puedes enviar un campo vacio");
    // error.innerHTML = "No puedes enviar un campo vacio";
    // caja.innerHTML = "";
    showError("No puedes enviar un campo vacio");
    return;
  }

  const jugador = obj1.find((item) => item.id === Number(inputValue));

  if (!jugador) {
    // alert('No existe el jugador')
    // error.innerHTML = "No existe el jugador";
    // caja.innerHTML = "";
    showError("No existe el jugador");
    return;
  }

  console.log(jugador);
  // {id: 1, name: 'Lionel Messi', age: 25, club: 'Inter Miami', country: 'Argentina'}
  localStorage.setItem("UltimoJugador", JSON.stringify(jugador));
  renderJugador(jugador);
};


// Principios SOLID



saludar()

function saludar() {
  console.log('Holi')
}


const despedir = () => {
  console.log('chau')
}

despedir()

const init = () => {
  form.addEventListener("submit", handleSubmit);
  window.addEventListener("DOMContentLoaded", () => {
    const ultimoJugador = JSON.parse(localStorage.getItem("UltimoJugador"));
    renderJugador(ultimoJugador);
  });
};

init();
