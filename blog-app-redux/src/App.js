import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import promise from 'redux-promise';

import PostsIndex from './components/posts_index';
import PostsNew from './components/post_new';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

class App extends Component {
  render() {
    return (
      <Provider store={createStoreWithMiddleware(reducers)}>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to React</h2>
          </div>
          <BrowserRouter>
            <div>
              <Switch>
                <Route path="/posts/new" component={PostsNew} />
                <Route path="/" component={PostsIndex} />
              </Switch>
            </div>
          </BrowserRouter>
        </div>
      </Provider>
    );
  }
}

export default App;
