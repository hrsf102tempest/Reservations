import { connect } from 'react-redux';
import CalendarHead from '../../components/reservation-pieces/calendarHead.jsx';
import changeMonthYear from '../../actions/CalendarHeadAction';

const mapDispatchToProps = (dispatch) => {
  const obj = {
    newDate: (date) => {
      dispatch(changeMonthYear(date));
    },
  };
  return obj;
};

const mapStateToProps = (state) => {
  console.log(state.CalendarHeadReducer);
  const props = {
    month: state.CalendarHeadReducer.date.month,
    year: state.CalendarHeadReducer.date.year,
    business: state.ReservationsReducer,
  };
  return props;
};

const CalendarHeadContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(CalendarHead);

export default CalendarHeadContainer;
