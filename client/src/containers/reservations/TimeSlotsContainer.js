import { connect } from 'react-redux';
import TimeSlots from '../../components/reservation-pieces/timeSlots';
import changeTime from '../../actions/TimeSlotsAction';

const mapDispatchToProps = (dispatch) => {
  const obj = {
    newTime: (time) => {
      dispatch(changeTime(time));
    },
  };
  return obj;
};

const mapStateToProps = (state) => {
  const props = {
    date: state.CalendarViewReducer.date,
    time: state.TimeSlotsReducer,
    hours: state.ReservationsReducer === null ? null : state.ReservationsReducer.hours,
  };
  return props;
};

const TimeSlotsContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(TimeSlots);

export default TimeSlotsContainer;
