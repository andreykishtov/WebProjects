import css from './static/css/globals.css';

import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux'
import store from './store'

import App from './containers/App/App'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.querySelector('.main'));