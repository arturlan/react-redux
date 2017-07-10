import React, { Component } from 'react';
import snowman from '../snowman.png';

import { Link } from 'react-router-dom';

export default class HomePage extends Component {
  render() {
    return (
      <div>
        <div className="center">
          <img src={snowman} alt="snowman" />
          <p>Wana know if you'll melt outside?</p>
          <p>Start getting some weather.</p>
        </div>
        <Link className="btn btn-primary" to="/weather_card">
          +
        </Link>
      </div>
    );
  }
}
