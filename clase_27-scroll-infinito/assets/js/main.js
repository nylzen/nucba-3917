// Donde vamos a renderizar los pokemones, el loader.
const pokemonsContainer = document.querySelector("#caja");
const loader = document.querySelector(".pokeballs-container");

// Funcion controladora de la app
const appState = {
  currentURL: "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=8",
  isFetching: false,
};

// Funcion para hacer el template de la api
const pokemonTemplate = (pokemon) => ({
  id: pokemon.id,
  name: pokemon.name,
  image: pokemon.sprites.other.home.front_default,
  height: pokemon.height / 10,
  weight: pokemon.weight / 10,
  types: pokemon.types,
  experience: pokemon.base_experience,
});

const createTypeCards = (types) => {
  return types
    .map(
      (type) =>
        `<span class="${type.type.name} poke__type">${type.type.name}</span>`
    )
    .join("");
};

const createPokemonCard = (pokemon) => {
  const { id, name, image, height, weight, types, experience } =
    pokemonTemplate(pokemon);

  return `
  <div class="poke">
    <img src="${image}"/>
    <h2>${name}</h2>
    <span class="exp">EXP: ${experience}</span>
    <div class="tipo-poke">
      ${createTypeCards(types)}
    </div>
    <p class="id-poke">#${id}</p>
    <p class="height">Height: ${height}</p>
    <p class="weight">Weight: ${weight}</p>
  </div>
  `;
};

// Fn para el html y la fn para mapear esa data
const renderPokemonList = (pokemonList) => {
  pokemonsContainer.innerHTML += pokemonList.map(createPokemonCard).join("");
};

const renderOnScroll = (pokemonList) => {
  loader.classList.toggle("show");
  setTimeout(() => {
    loader.classList.toggle("show");
    renderPokemonList(pokemonList);
    appState.isFetching = false;
  }, 1000);
};

// Por un lado el fetch
const getPokemonsData = async () => {
  const { next, results } = await fetchPokemons(appState.currentURL);
  if (!appState.currentURL) return;
  appState.currentURL = next;

  const pokemonsDataURLS = results.map((pokemon) => pokemon.url);
  // console.log(pokemonsDataURLS)

  const pokemonsData = await Promise.all(
    pokemonsDataURLS.map(async (url) => {
      const nextPokemonsData = await fetch(url);
      return await nextPokemonsData.json();
    })
  );
  // console.log('DATA', pokemonsData)
  return pokemonsData;
};

// Por otro lado el render
const loadAndRenderPokemons = async (renderingFuncion) => {
  // console.log('hola')
  const pokemonsData = await getPokemonsData();
  console.log(pokemonsData);
  console.log(appState);
  renderingFuncion(pokemonsData);
};

const isEndOfPage = () => {
  const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
  const bottom = scrollTop + clientHeight >= scrollHeight - 10;
  return bottom;
};

// Funcion para verificar el scroll y renderizar
/*
scrolltop: es la altura en px de lo que scrolleamos
clientHeight: es la altura total del elemento.
scrollHeight: es la altura total del elemento, incluyendo el contenido que no se ve del viewport, pero que si se va a ver si scrolleamos
*/
const loadNextPokemons = async () => {
  if (!appState.currentURL) return;

  if (isEndOfPage() && !appState.isFetching) {
    appState.isFetching = true;
    loadAndRenderPokemons(renderOnScroll);
  }
};

const init = () => {
  window.addEventListener(
    "DOMContentLoaded",
    async () => await loadAndRenderPokemons(renderPokemonList)
  );
  window.addEventListener("scroll", async () => await loadNextPokemons());
};

init();
