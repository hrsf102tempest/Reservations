import ReactDOM from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';
import Reservations from './components/Reservations.jsx';
import store from './store/store';

ReactDOM.render(
  <Provider store={store}>
    <Reservations />
  </Provider>,
  document.getElementById('reservations')
);
