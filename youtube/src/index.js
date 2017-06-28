import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import reducers from './reducers';
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyApHR-kxXACVxc-cVMwkds09MZKV4zzeOA';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <SearchBar />
  </Provider>
  , document.querySelector('.container'));
