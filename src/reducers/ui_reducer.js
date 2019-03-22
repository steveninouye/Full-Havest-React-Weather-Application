import { RECEIVE_FORECAST, API_ERRORS } from '../actions/weather_actions';
import { LOADING } from '../actions/ui_actions';

const uiReducer = (state = { loading: true }, action) => {
  switch (action.type) {
    case RECEIVE_FORECAST:
    case API_ERRORS:
      return { loading: false };
    case LOADING:
      return { loading: true };
    default:
      return state;
  }
};

export default uiReducer;
