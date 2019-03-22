import zipcodes from 'zipcodes';

import * as APIUtil from '../utils/weather_ajax_utils';
import { loading } from './ui_actions';
import {
  transformForecast,
  transformWeather
} from '../utils/transformation_util';

export const RECEIVE_FORECAST = 'RECEIVE_FORECAST';
export const API_ERRORS = 'API_ERRORS';

/**
 * Returns POJO for Redux Store holding payload: forecast & location
 *
 * @param {object[]} forecast
 * @param {object} location
 * @returns {object}
 */
export const receiveWeather = (forecast, location) => ({
  type: RECEIVE_FORECAST,
  forecast,
  location
});

/**
 * Returns POJO for Redux Errors Reducer
 *
 * @returns {object}
 */
export const apiErrors = () => ({
  type: API_ERRORS
});

/**
 * Requests weather data according to zipcode and dispatches data to Redux store
 *
 * @param {string} zip
 */
export const getWeather = (zip) => (dispatch) => {
  dispatch(loading());
  let weatherData;
  APIUtil.getCurrentWeather(zip)
    .then(({ data }) => {
      weatherData = transformWeather(data);
      return APIUtil.getForecast(zip);
    })
    .then(({ data }) => {
      const forecast = transformForecast(data, weatherData);
      dispatch(receiveWeather(forecast, zipcodes.lookup(zip)));
    })
    .catch((err) => {
      console.log(err);
      dispatch(apiErrors());
    });
};
