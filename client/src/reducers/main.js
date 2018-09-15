import { combineReducers } from 'redux';
import ReservationsReducer from './ReservationsReducer';
import CalendarReducer from './CalendarReducer';
import CalendarHeadReducer from './CalendarHeadReducer';
import CalendarViewReducer from './CalendarViewReducer';
import TimeSlotsReducer from './TimeSlotsReducer';

const rootReducer = combineReducers({
  ReservationsReducer,
  CalendarReducer,
  TimeSlotsReducer,
  CalendarHeadReducer,
  CalendarViewReducer,
});

export default rootReducer;
