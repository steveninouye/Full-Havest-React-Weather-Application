import axios from 'axios';

/**
 * Makes AJAX request to get forcast and returns Promise
 *
 * @param {string} zip
 * @returns {Promise}
 */
export const getForecast = (zip) =>
  axios.get(
    `https://api.openweathermap.org/data/2.5/forecast?zip=${zip}&appid=f47e1ea1fcd7dfc3392ea742b62c2dae&units=Imperial`
  );

/**
 * Makes AJAX request to get current weather and returns Promise
 *
 * @param {string} zip
 * @returns {Promise}
 */
export const getCurrentWeather = (zip) =>
  axios.get(
    `https://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=f47e1ea1fcd7dfc3392ea742b62c2dae&units=Imperial`
  );
