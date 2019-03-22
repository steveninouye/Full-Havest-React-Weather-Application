import React, { Component } from 'react';

class ZipInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      zip: '94111'
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    const { zip } = this.state;
    this.props.getWeather(zip);
  }

  handleChange({ target }) {
    this.setState({ zip: target.value }, () => {
      if (this.state.zip.length === 5) {
        this.props.getWeather(this.state.zip);
      }
    });
  }

  render() {
    const { zip } = this.state;
    return (
      <>
        <h2 className="input-header">Change Location...</h2>
        <input type="text" value={zip} onChange={this.handleChange} />
      </>
    );
  }
}

export default ZipInput;
