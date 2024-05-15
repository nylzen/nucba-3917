// API KEY

// URL
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

const requestCity = async (city) => {
  try {
    const response = await fetch(
      `${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric&lang=es`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Hubo un error en la petition: ${error}`);
  }
};
