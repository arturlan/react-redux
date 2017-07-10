import React, { Component } from 'react';
import { connect } from 'react-redux';

class Card extends Component {

  // renderCity(cityName) {
  //   const id = cityName.results[0].place_id;
  //   return (
  //     <h5 key={id}>{cityName.results[0].formatted_address}</h5>
  //   );
  // }

  renderWeather(cityData) {
    const windSpeed = cityData.currently.windSpeed;
    const timeZone = cityData.timezone
    const currentTemp = cityData.currently.temperature;
    return (
      <div className="container for-info" key={windSpeed}>
        <h5>{timeZone}</h5>
        <h3>{currentTemp} F</h3>
      </div>
    );
  }

  render() {
    return (
      <div>
        {/* {this.props.city.map(this.renderCity)} */}
        {this.props.weather.map(this.renderWeather)}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    weather: state.weather,
    city: state.city
   };
}

export default connect(mapStateToProps)(Card);
