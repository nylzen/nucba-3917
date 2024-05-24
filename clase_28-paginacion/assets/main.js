// Elementos del DOM
const btnContainer = document.querySelector(".pagination");
const prevBTN = document.querySelector(".left");
const nextBTN = document.querySelector(".right");
const pageNumber = document.querySelector(".page-number");
const cardsContainer = document.querySelector(".cards-container");
const filterButtons = document.querySelectorAll(".btn");
const filterContainer = document.querySelector(".filter-container");

const appState = {
  searchParameter: TRENDING,
  total: null,
  page: null,
};

// Funcion para mostrar pelis
const showMovies = async () => {
  const movies = await fetchMovies(appState.searchParameter);

  appState.total = movies.total_pages;
  appState.page = movies.page;
  setPaginationState();
  renderCards(movies.results);
};

// Funcion para setear el estado de la paginacion
const setPaginationState = () => {
  pageNumber.innerHTML = appState.page;
  togglePreviousBtn(appState.page);
};

// Funcion para deshabilitar el boton de volver atras
const togglePreviousBtn = (page) => {
  if (page === 1) {
    prevBTN.classList.add("disabled");
  } else {
    prevBTN.classList.remove("disabled");
  }
};

// Funcion para deshabilitar el boton de pagina siguiente
const toggleNextBtn = (page, total) => {
  if (page === total) {
    nextBTN.classList.add("disabled");
  } else {
    nextBTN.classList.remove("disabled");
  }
};

// Url para las imagenes. Docu: https://developer.themoviedb.org/docs/image-basics
const imgBaseURL = "https://image.tmdb.org/t/p/w500";

const createCardTemplate = (movie) => {
  const { title, poster_path, vote_average, release_date } = movie;
  return `
  <div class="card">
   <img loading="lazy" src="${
     poster_path ? imgBaseURL + poster_path : "./assets/img/placeholder.png>"
   }" alt="pelicula" class="card-img" />
   <div class="card-popularity">${formatVoteAverage(
     vote_average
   )}% de popularidad</div>

    <div class="card-content">
    <h2>${title}</h2>
     <p>Fecha de estreno: ${release_date}</p>
    </div>
   </div>
  `;
};

const formatVoteAverage = (voteAverage) => {
  return Math.floor(voteAverage * 10);
};

// Funcion para renderizar las cards
const renderCards = (movies) => {
  cardsContainer.innerHTML = movies
    .map((movie) => createCardTemplate(movie))
    .join("");
};

/* ------------------------------------------------- */
/* -----------------CAMBIAR PAGINA------------------ */
/* ------------------------------------------------- */
const nextPage = () => {
  if (appState.page === appState.total) return;
  appState.page += 1;
  changePage();
};

const previousPage = () => {
  if (appState.page === 1) return;
  appState.page -= 1;
  changePage();
};

const changePage = async () => {
  const movies = await fetchMovies(appState.searchParameter, appState.page);
  setPaginationState();
  renderCards(movies.results);
  filterContainer.scrollIntoView({
    behavior: "smooth",
  });
};

/* ------------------------------------------------- */
/* -----------------CAMBIAR CATEGORIA--------------- */
/* ------------------------------------------------- */
const changeSearchParameter = (e) => {
  if (!isActiveCategoryBtn(e.target)) return;
  const selectedParameter = e.target.dataset.filter;
  appState.searchParameter = parameterSelector(selectedParameter);
  setActiveButton(selectedParameter);
  showMovies();
};

const isActiveCategoryBtn = (btn) => {
  return (
    btn.classList.contains("btn") && !btn.classList.contains("btn--active")
  );
};

// Funcion para seleccionar la categoria de busqueda que son strings
const parameterSelector = (filterType) => {
  return filterType === "TOPRATED"
    ? TOP_RATED
    : filterType === "UPCOMING"
    ? UPCOMING
    : TRENDING;
};

// Funcion para modificar el active del boton clickeado
const setActiveButton = (selectedParameter) => {
  const buttons = [...filterButtons];
  buttons.forEach((btn) => {
    if (btn.dataset.filter !== selectedParameter) {
      btn.classList.remove("btn--active");
    } else {
      btn.classList.add("btn--active");
    }
  });
};

// Init
const init = () => {
  window.addEventListener("DOMContentLoaded", showMovies);
  nextBTN.addEventListener("click", nextPage);
  prevBTN.addEventListener("click", previousPage);
  filterContainer.addEventListener("click", changeSearchParameter);
};

init();
