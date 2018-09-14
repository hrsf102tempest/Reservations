import { combineReducers } from 'redux';
import ReservationsReducer from './ReservationsReducer';
import CalendarReducer from './CalendarReducer';
import CalendarHeadReducer from './CalendarHeadReducer';
import TimeSlotsReducer from './TimeSlotsReducer';
// import reducers

const rootReducer = combineReducers({
  ReservationsReducer,
  CalendarReducer,
  TimeSlotsReducer,
  CalendarHeadReducer,
});

export default rootReducer;
