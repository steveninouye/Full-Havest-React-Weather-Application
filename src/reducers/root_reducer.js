import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
// import logger from 'redux-logger';

import forecast from './weather_reducer';
import location from './location_reducer';
import ui from './ui_reducer';
import errors from './errors_reducer';

const rootReducer = combineReducers({ forecast, location, errors, ui });

// // USED FOR DEVELOPMENT!!!!
// const configureStore = (preloadedState = {}) =>
//   createStore(rootReducer, preloadedState, applyMiddleware(thunk, logger));

const configureStore = (preloadedState = {}) =>
  createStore(rootReducer, preloadedState, applyMiddleware(thunk));

export default configureStore;
