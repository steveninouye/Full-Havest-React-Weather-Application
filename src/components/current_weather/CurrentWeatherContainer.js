import { connect } from 'react-redux';

import CurrentWeather from './CurrentWeather';

const mapStateToProps = ({ forecast, location, ui, errors }, ownProps) => {
  const { loading } = ui;
  return { forecast, location, loading, errors };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

const CurrentWeatherContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CurrentWeather);

export default CurrentWeatherContainer;
