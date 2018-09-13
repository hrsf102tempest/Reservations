import { combineReducers } from 'redux';
import ReservationsReducer from './ReservationsReducer';
import CalendarReducer from './CalendarReducer';
import TimeSlotsReducer from './TimeSlotsReducer';
// import reducers

const rootReducer = combineReducers({
  ReservationsReducer,
  CalendarReducer,
  TimeSlotsReducer,
});

export default rootReducer;
