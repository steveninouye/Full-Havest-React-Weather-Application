import { RECEIVE_FORECAST } from '../actions/weather_actions';

const locationReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_FORECAST:
      return action.location;
    default:
      return state;
  }
};

export default locationReducer;
