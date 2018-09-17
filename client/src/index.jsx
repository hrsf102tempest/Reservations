import ReactDOM from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';
import ReservationsContainer from './containers/reservations/ReservationsContainer';
import store from './store/store';

ReactDOM.render(
  <Provider store={store}>
    <ReservationsContainer />
  </Provider>,
  document.getElementById('reservations'),
);
