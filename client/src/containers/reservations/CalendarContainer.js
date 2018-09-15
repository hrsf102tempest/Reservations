import { connect } from 'react-redux';
import Calendar from '../../components/reservation-pieces/calendar.jsx';
import changeStatus from '../../actions/CalendarAction';

const mapDispatchToProps = (dispatch) => {
  const obj = {
    newStatus: (status) => {
      dispatch(changeStatus(status));
    },
  };
  return obj;
};

const mapStateToProps = (state) => {
  const props = {
    date: state.CalendarViewReducer.date,
    showCalendar: state.CalendarReducer.showCalendar,
  };
  return props;
};

const CalendarContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Calendar);

export default CalendarContainer;
