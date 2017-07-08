import React, { Component } from 'react';
import './App.css';

import NavBar from './containers/nav_bar';
import HomePage from './components/home_page';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <HomePage />
      </div>
    );
  }
}

export default App;
