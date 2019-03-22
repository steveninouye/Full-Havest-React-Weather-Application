import { connect } from 'react-redux';
import ZipInput from './ZipInput';
import { getWeather } from '../../actions/weather_actions';

const mapStateToProps = (state, ownProps) => {
  return {};
};
const mapDispatchToProps = (dispatch) => {
  return {
    getWeather: (zip) => dispatch(getWeather(zip))
  };
};
const ZipInputContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ZipInput);

export default ZipInputContainer;
