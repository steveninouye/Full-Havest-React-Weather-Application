import { RECEIVE_FORECAST } from '../actions/weather_actions';

const weatherReducer = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_FORECAST:
      return action.forecast;
    default:
      return state;
  }
};

export default weatherReducer;
