import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Presidents from './components/presidents';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          List of Presidents of the United States of America
        </p>
        <Presidents />
      </div>
    );
  }
}

export default App;
