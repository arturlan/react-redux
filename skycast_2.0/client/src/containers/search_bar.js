import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';
import { cityToCoords } from '../actions/city_to_coords';
import axios from 'axios';
import Card from './card';


const GOOGLE_URL = `https://maps.googleapis.com/maps/api/geocode/json?address`;

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: ''
    }

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    this.setState({ term: event.target.value });
  }

  onFormSubmit(event) {
    event.preventDefault();
    this.props.cityToCoords(this.state.term);
    axios.get(`${GOOGLE_URL}=${this.state.term}`)
    .then((response) => {
      this.props.fetchWeather(response);
    });

    this.setState({ term: '' });
  }

  render() {
    return (
      <div>
        <div className="display inline">
          <Card />
          <div>
            <div className="container for-button">
              <button type="button" className="btn btn-confirm" data-toggle="modal" data-target=".bs-example-modal-lg">+</button>
              <p>GET SOME WEATHER</p>
            </div>
          </div>
        </div>
        <div className="modal fade bs-example-modal-lg" tabIndex="-1" role="dialog" aria-labelledby="myLargeModalLabel">
          <div className="modal-dialog modal-lg" role="document">
            <div className="form input">
              <form onSubmit={this.onFormSubmit} className="input-group">
                <input
                  placeholder="  Where are you?"
                  className="form-control"
                  value={this.state.term}
                  onChange={this.onInputChange} />
                <span className="input-group-btn">
                  <button type="submit" className="btn btn-secondary">Submit</button>
                </span>
              </form>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    fetchWeather: fetchWeather,
    cityToCoords: cityToCoords
  }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
