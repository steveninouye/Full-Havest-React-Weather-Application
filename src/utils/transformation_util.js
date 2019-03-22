/**
 * Extracts necessary data from JSON response for Redux store
 *
 * @param {object}
 * @returns {object}
 */
export const transformWeather = ({ wind, weather, main, dt }) => ({
  dt,
  windSpeed: wind.speed,
  description: weather[0].description,
  humidity: main.humidity,
  temp: main.temp,
  maxTemp: main.temp_max,
  minTemp: main.temp_min
});
