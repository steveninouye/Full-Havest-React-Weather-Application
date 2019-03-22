import React from 'react';
import { Provider } from 'react-redux';

import configureStore from '../reducers/root_reducer';
import CurrentWeatherContainer from './current_weather/CurrentWeatherContainer';
import ZipInputContainer from './zip_input/ZipInputContainer';
import ForecastWeatherContainer from './forecast_weather/ForecastWeatherContainer';

const Root = () => (
  <Provider store={configureStore()}>
    <div id="weather-app">
      <div className="left-container">
        <h1 className="current-header">Current</h1>
        <div className="current">
          <CurrentWeatherContainer />
        </div>
        <ZipInputContainer />
      </div>
      <div className="right-container">
        <h1 className="forecast-header">Forecast</h1>
        <div className="forecast">
          <ForecastWeatherContainer />
        </div>
      </div>
    </div>
  </Provider>
);

export default Root;
