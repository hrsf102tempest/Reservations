import { connect } from 'react-redux';
import CalendarFull from '../../components/reservation-pieces/calendarFull.jsx';
import changeStatus from '../../actions/CalendarAction';

const mapDispatchToProps = (dispatch) => {
  const obj = {
    hideCalendar: () => {
      dispatch(changeStatus(false));
    },
  };
  return obj;
};

const mapStateToProps = (state) => {
  const props = {
    showCalendar: state.CalendarReducer.showCalendar,
  };
  return props;
};

const CalendarFullContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(CalendarFull);

export default CalendarFullContainer;
