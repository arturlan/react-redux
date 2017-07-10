import React, { Component } from 'react';
import './App.css';

import NavBar from './containers/nav_bar';
import HomePage from './components/home_page';
import SearchBar from './containers/search_bar';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <BrowserRouter>
            <div>
              <Switch>
                <Route path="/weather_card" component={SearchBar} />
                <Route path="/" component={HomePage} />
              </Switch>
            </div>
          </BrowserRouter>
      </div>
    );
  }
}

export default App;
