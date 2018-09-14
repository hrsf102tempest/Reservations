import { connect } from 'react-redux';
import Calendar from '../../components/reservation-pieces/calendar.jsx';
import changeDate from '../../actions/CalendarAction';

const mapDispatchToProps = (dispatch) => {
  const obj = {
    newDate: (date) => {
      dispatch(changeDate(date));
    },
  };
  return obj;
};

const mapStateToProps = (state) => {
  console.log('cal reducer', state.CalendarViewReducer.date);
  const props = {
    date: state.CalendarViewReducer.date,
    business: state.ReservationsReducer,
  };
  return props;
};

const CalendarContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Calendar);

export default CalendarContainer;
