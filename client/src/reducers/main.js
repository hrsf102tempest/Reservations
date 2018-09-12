import { combineReducers } from 'redux';
import ReservationsReducer from './ReservationsReducer';
import CalendarReducer from './CalendarReducer';
// import reducers

const rootReducer = combineReducers({
  ReservationsReducer,
  CalendarReducer,
});

export default rootReducer;
