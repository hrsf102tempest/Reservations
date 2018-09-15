import { connect } from 'react-redux';
import CalendarView from '../../components/reservation-pieces/calendarView.jsx';
import CalendarViewReducer from '../../actions/CalendarViewAction';
import changeStatus from '../../actions/CalendarAction';

const mapDispatchToProps = (dispatch) => {
  const obj = {
    newViewedDate: (date) => {
      dispatch(CalendarViewReducer(date));
    },
    newStatus: (status) => {
      dispatch(changeStatus(status));
    },
  };
  return obj;
};

const mapStateToProps = (state) => {
  const props = {
    day: state.CalendarViewReducer.day,
    month: state.CalendarHeadReducer.month,
    year: state.CalendarHeadReducer.year,
    daysOut: state.ReservationsReducer === null ? 0 : state.ReservationsReducer.days_in_advance,
    date: state.CalendarViewReducer.date,
    showCalendar: state.CalendarReducer.showCalendar,
  };
  return props;
};

const CalendarViewContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(CalendarView);

export default CalendarViewContainer;
