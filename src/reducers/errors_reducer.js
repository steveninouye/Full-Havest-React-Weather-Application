import { RECEIVE_FORECAST, API_ERRORS } from '../actions/weather_actions';

const errorsReducer = (state = null, action) => {
  switch (action.type) {
    case RECEIVE_FORECAST:
      return null;
    case API_ERRORS:
      return true;
    default:
      return state;
  }
};

export default errorsReducer;
