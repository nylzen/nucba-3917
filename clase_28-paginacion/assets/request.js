// Guardar la api key
const API_KEY = "2b1b9a32975c0fcbff405c0cbe51e9a2";

const TRENDING = `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`;
const TOP_RATED = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`;
const UPCOMING = `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}`;

const fetchMovies = async (searchTerm, page = 1) => {
  try {
    const response = await fetch(searchTerm + `&page=${page}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Hubo un error al fetchear pelis: ${error}`);
  }
};


// fetchMovies(appState.searchParameter)

const id = 10

fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
  .then(response => response.json())
  .then(data => console.log(data));