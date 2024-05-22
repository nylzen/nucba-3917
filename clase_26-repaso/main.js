const container = document.querySelector('.container')

const getPokemones = async () => {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon/40");
  const data = await  response.json();

  container.innerHTML = `
    <div class="${data.types[0].type.name}">
      <h1>${data.name}</h1>
      <img src="${data.sprites.front_default}" alt="${data.name}">
      ${data.types.map((type) => `<p>${type.type.name}</p>`).join('')}
    </div>
  `

};

getPokemones()

fetch('./mock.json')
  .then(res => res.json())
  .then(console.log)

// fetch("https://pokeapi.co/api/v2/pokemon/1")
//   .then((res) => res.json())
//   .then((data) => console.log(data.types[0].type.name))
//   .catch((error) => console.log(error));

// const getPokemones = () => {
//   return new Promise((resolve, reject) => {

//   })
// }


