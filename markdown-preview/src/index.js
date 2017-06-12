import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Checkbox from './components/Checkbox';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(
  <div>
    <App />
    {/* <Checkbox /> */}
  </div>, document.getElementById('root'));
registerServiceWorker();
