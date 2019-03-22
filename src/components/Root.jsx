import React from 'react';
import { Provider } from 'react-redux';

const Root = () => (
  <Provider store={configureStore()}>
    <div id="weather-app">
weather app
    </div>
  </Provider>
);

export default Root;
