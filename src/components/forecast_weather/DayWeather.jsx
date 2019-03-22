import React from 'react';
import { getDayHeading } from '../../utils/transformation_util';

const DayWeather = ({ weather, idx }) => {
  const heading = getDayHeading(weather, idx);
  const { windSpeed, description, humidity, maxTemp, minTemp } = weather;
  return <div className="forecast-day">weather</div>;
};

export default DayWeather;
