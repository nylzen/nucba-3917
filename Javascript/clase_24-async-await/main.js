const BASE_URL = "https://pokeapi.co/api/v2/pokemon/ditto";
// const BASE_URL = 'https://rickandmortyapi.com/api/character'
// console.log(fetch(BASE_URL));

// fetch(BASE_URL)
//   .then(res => res.json())
//   .then(data => {
//     console.log(data)
//     console.log(data.name)
//     console.log(data.id)
//     console.log(data.abilities[0].ability.name)
//   })
//   .catch(error => console.error(error))

// ASYNC / AWAIT

// const getPokemon = async () => {}
// async function getPokemon(){}

// const getPokemon = async () => {
//   const response = await fetch(BASE_URL)
//   // console.log(response) // CORS
//   const data = await response.json()
//   console.log(data)
//   return data
// }

// getPokemon()

// Try catch

const getPokemon = async () => {
  try {
    const response = await fetch(BASE_URL);
    // const response = await fetch('mock.json')
    // console.log(response) // CORS
    const data = await response.json();
    // console.log(data);
    return data;
  } catch (error) {
    console.error(`Errorsito: ${error}`);
  }
};

const contenedor = document.querySelector(".contenedor");

const renderPokemon = async () => {
  const pokemon = await getPokemon();

  console.log(pokemon);
  const { name, sprites, types } = pokemon;
  // console.log(name, sprites, types)

  contenedor.innerHTML = `
  <div className="card">
    <img src="${sprites.other.dream_world.front_default}">
    <h2>${name}</h2>
    <p>${types[0].type.name}</p>

  </div>
  `;
};

// renderPokemon();

const getDollars = async () => {
  const res = await fetch(`https://dolarapi.com/v1/dolares`);
  const data = await res.json();
  console.log(data);
  return data;
};

const renderDollars = async () => {
  const dolares = await getDollars();

  contenedor.innerHTML = dolares
    .map((dolar) => {
      return `
      <div>
        <h2>${dolar.nombre}</h2>
        <h2>${dolar.compra}</h2>
        <h2>${dolar.venta}</h2>
        <hr>
      </div>
    `;
    })
    .join("");
};

