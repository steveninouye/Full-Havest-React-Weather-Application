import React from 'react';
import { SyncLoader } from 'react-spinners';

const CurrentWeather = ({ forecast, location, loading, errors }) => {
  if (loading) return <SyncLoader />;
  if (errors) return <>there was a problem finding your city</>;
  let { city, state } = location;
  const weather = forecast[0];
  const { temp } = weather;
  const celciusTemp = ((temp - 32) * 5) / 9;
  return (
    <>
      <h2 className="city-title">
        {city}, {state}
      </h2>
      <div className="current-tempF">
        {Math.round(temp)}&deg;
        <div className="fahrenheit">Fahrenheit</div>
      </div>
      <div className="current-tempC">
        {Math.round(celciusTemp)}&deg;
        <div className="celsius">Celsius</div>
      </div>
    </>
  );
};

export default CurrentWeather;
