import React from 'react';
import { SyncLoader } from 'react-spinners';

import DayWeather from './DayWeather';

const ForecastWeather = ({ forecast, loading, errors }) => {
  if (loading) return <SyncLoader />;
  if (errors) return <>there was a problem finding your city</>;
  return (
    <>
      {forecast.map((weather, idx) => (
        <DayWeather key={weather.dt} weather={weather} idx={idx} />
      ))}
    </>
  );
};

export default ForecastWeather;
