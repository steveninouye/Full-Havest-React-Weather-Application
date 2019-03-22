import { connect } from 'react-redux';
import ForecastWeather from './ForecastWeather';

const mapStateToProps = ({ forecast, ui, errors }, ownProps) => {
  const { loading } = ui;
  return { forecast, loading, errors };
};

const mapDispatchToProps = (dispatch) => ({});

const ForecastWeatherContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ForecastWeather);

export default ForecastWeatherContainer;
