import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import './index.css';
import App from './App.js';

ReactDOM.render(
      <App />,
  document.getElementById('root')
);
