const fetchPokemons = async (url) => {
  try {
    const res = await fetch(url);
    const data = await res.json();
    // console.log('REQUEST:', data);
    return data;
  } catch (error) {
    console.error(error);
  }
};

// fetchPokemons('https://pokeapi.co/api/v2/pokemon/?offset=60&limit=20')