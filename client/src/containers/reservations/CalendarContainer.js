import { connect } from 'react-redux';
import Calendar from '../../components/reservation-pieces/calendar.jsx';
import changeMonth from '../../actions/CalendarAction';

const mapDispatchToProps = (dispatch) => {
  const obj = {
    newMonth: (month) => {
      dispatch(changeMonth(month));
    },
  };
  return obj;
};

const mapStateToProps = (state) => {
  const props = {
    month: state.month,
    year: state.year,
  };
  return props;
};

const CalendarContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Calendar);

export default CalendarContainer;
