import React from 'react';
import { getDayHeading } from '../../utils/transformation_util';
import { getIcon } from '../../utils/icon_utils';

const DayWeather = ({ weather, idx }) => {
  const heading = getDayHeading(weather, idx);
  const { windSpeed, description, humidity, maxTemp, minTemp } = weather;
  return (
    <div className="forecast-day">
      <h3 className="forecast-heading">{heading}</h3>
      <div className="forecast-body">
        <div className="forecast-details">
          <div className="forecast-description">{description}</div>
          <div className="forecast-maxtemp">
            High: {Math.round(maxTemp)}&deg;
          </div>
          <div className="forecast-mintemp">
            Low: {Math.round(minTemp)}&deg;
          </div>
          <div className="forecast-humidity">
            Humidity: {Math.round(humidity)}&#37;
          </div>
          <div className="forecast-wind">Wind: {Math.round(windSpeed)} mph</div>
        </div>
        <div className="forecast-icon">{getIcon(description)}</div>
      </div>
    </div>
  );
};

export default DayWeather;
