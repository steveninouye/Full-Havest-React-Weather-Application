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

/**
 * Finds the index of 2 AM the next day in JSON response forecast
 *
 * @param {object[]} list
 * @returns {number}
 */
export const findTmrwIdx = (list) => {
  for (var i = 0; i < list.length; i++) {
    const date = list[i].dt_txt;
    if (date.includes('09:00:00')) return i;
  }
};

/**
 * Calculates the average of array numbers
 *
 * @param {number[]} values
 * @returns {number}
 */
export const getAvg = (values) => {
  const sum = values.reduce((acc, curr) => acc + curr);
  return sum / values.length;
};

/**
 * Gets weather data from JSON response over a 24 hr period
 *
 * @param {object[]} list
 * @param {number} startIdx
 * @returns {object}
 */
export const getDayWeather = (list, startIdx) => {
  const humidity = [];
  const temp = [];
  const windSpeed = [];
  let description;
  for (var i = startIdx; i < startIdx + 8; i++) {
    const { weather, wind, main } = list[i];
    if (i === startIdx + 4) description = weather[0].description;
    humidity.push(main.humidity);
    temp.push(main.temp);
    windSpeed.push(wind.speed);
  }
  return {
    description,
    dt: list[startIdx].dt,
    windSpeed: getAvg(windSpeed),
    humidity: getAvg(humidity),
    temp: getAvg(temp),
    maxTemp: Math.max(...temp),
    minTemp: Math.min(...temp)
  };
};

/**
 * Gets weather from 3 days forecast and returns array for Redux store
 *
 * @param {object} list{}
 * @param {object} weather
 * @returns {object[]}
 */
export const transformForecast = ({ list }, weather) => {
  const weathers = [weather];
  const tmrwIdx = findTmrwIdx(list);
  weathers.push(getDayWeather(list, tmrwIdx));
  weathers.push(getDayWeather(list, tmrwIdx + 8));
  weathers.push(getDayWeather(list, tmrwIdx + 16));
  return weathers;
};

/**
 * Gets heading for forcast
 *
 * @param {object} weather
 * @param {number} idx
 * @returns
 */
export const getDayHeading = (weather, idx) => {
  if (idx === 0) return 'Today';
  if (idx === 1) return 'Tomorrow';
  const day = new Date(weather.dt * 1000);
  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
  ];
  return days[day.getDay()];
};
