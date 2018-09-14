import { connect } from 'react-redux';
import CalendarHead from '../../components/reservation-pieces/calendarHead.jsx';
import changeMonthYear from '../../actions/CalendarHeadAction';

const mapDispatchToProps = (dispatch) => {
  const obj = {
    newDate: (month, year) => {
      console.log('hit', month, year);
      dispatch(changeMonthYear(month, year));
    },
  };
  return obj;
};

const mapStateToProps = (state) => {
  const props = {
    month: state.CalendarHeadReducer.month,
    year: state.CalendarHeadReducer.year,
  };
  return props;
};

const CalendarHeadContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(CalendarHead);

export default CalendarHeadContainer;
