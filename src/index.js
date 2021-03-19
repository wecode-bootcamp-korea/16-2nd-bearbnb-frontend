import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './Routes';
import { rootReducers } from './reducers';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import './Styles/Common.scss';

const store = createStore(rootReducers);

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById('root')
);
