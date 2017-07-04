import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import PostsIndex from './components/posts_index';
// import reducers from './reducers';
import promise from 'redux-promise';

const createStoreWithMiddleware = applyMiddleware()(createStore);

class App extends Component {
  render() {
    return (
      // <Provider store={createStoreWithMiddleware(promise)(reducers)}>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to React</h2>
          </div>
          <BrowserRouter>
            <div>
              <Route path="/" component={PostsIndex} />
            </div>
          </BrowserRouter>
        </div>
      // </Provider>
    );
  }
}

export default App;
