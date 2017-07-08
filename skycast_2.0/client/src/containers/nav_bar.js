import React, { Component } from 'react';

export default class NavBar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-inverse">
          <div className="container-fluid">
            <div className="navbar-header">
              <i className="fa fa-bars" aria-hidden="true"></i>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
