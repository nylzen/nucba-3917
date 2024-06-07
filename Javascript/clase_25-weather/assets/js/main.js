/*
  Renderizar una card cuando busquemos una ciudad en el input
  - Escuchar el event del form
  - Capturar el valor del input (ciudad)
  - Pasamos el valor del input a la funcion fetch
  - Renderizar la card
*/

const form = document.getElementById("form");
const cityInput = document.querySelector(".search-input");
const cardContainer = document.querySelector(".card-container");
const searchMsg = document.querySelector(".search-msg");

// Funcion para redondear el numero
const roundNumber = (number) => Math.round(number);

// Funcion para renombrar la data de la api
const getCityData = (cityData) => {
  return {
    cityName: cityData.name,
    image: cityData.weather[0].icon,
    weatherDescription: cityData.weather[0].description,
    cityTemp: roundNumber(cityData.main.temp),
    cityST: roundNumber(cityData.main.feels_like),
    cityMaxTemp: roundNumber(cityData.main.temp_max),
    cityMinTemp: roundNumber(cityData.main.temp_min),
    cityHumidity: cityData.main.humidity,
  };
};

// Funcion para el html
//  <img src="https://openweathermap.org/img/wn/${image}@2x.png"/>

const createCityTemplateHTML = (cityData) => {

  const {
    cityName,
    image,
    weatherDescription,
    cityTemp,
    cityST,
    cityMaxTemp,
    cityMinTemp,
    cityHumidity,
  } = getCityData(cityData);

  return `
        <div class="weather-card animate">
          <div class="weather-info-container">
            <h2 class="weather-title">${cityName}</h2>
            <p class="weather-description">${weatherDescription}</p>
            <div class="weather-temp-container">
              <span class="weather-temp">${cityTemp}°</span>
              <span class="weather-st">${cityST}° ST</span>
            </div>
          </div>
          <div class="weather-img-container">
            <img src="./assets/img/${image}.png" alt="weather image" />
          </div>
          <div class="weather-extra-container">
            <div class="weather-minmax-container">
              <span class="weather-span"><i class="fa-solid fa-arrow-up-long"></i>Max: ${cityMaxTemp}º</span>
              <span class="weather-span"><i class="fa-solid fa-arrow-down-long"></i>Min: ${cityMinTemp}º</span>
            </div>
            <span class="weather-humidity">${cityHumidity}% Humedad</span>
          </div>
        </div>
  `;
};

// const createCityTemplateHTML = (cityData) => {



//   return `
//         <div class="weather-card animate">
//           <div class="weather-info-container">
//             <h2 class="weather-title">${cityData.name}</h2>
//             <p class="weather-description">${ cityData.weather[0].description}</p>
//           </div>
//         </div>
//   `;
// };

// Funcion para mostrarlo en el html
const renderCityCard = (cityData) => {
  cardContainer.innerHTML = createCityTemplateHTML(cityData);
};

// Funcion para cambiar el mensaje
const changeSearchMsg = (cityData) => {
  const { cityName } = getCityData(cityData);

  searchMsg.textContent = `Asi esta el clima en ${cityName}, Queres ver el clima en otra ciudad?`
};

const searchCity = async (e) => {
  e.preventDefault();
  const searchedCity = cityInput.value.trim();
  console.log(searchedCity)

  if (searchedCity === "") {
    // alert("Ingresa una ciudad");
    searchMsg.textContent = 'Por favor, ingresa una ciudad'
    return;
  }

  const fetchedCity = await requestCity(searchedCity);

  if (!fetchedCity.id) {
    searchMsg.textContent = `La ciudad ${searchedCity} no existe`;
    cardContainer.innerHTML = ''
    form.reset();
    return;
  }

  renderCityCard(fetchedCity);
  changeSearchMsg(fetchedCity)
  form.reset()
};

const init = () => {
  form.addEventListener("submit", searchCity);
};

init();
