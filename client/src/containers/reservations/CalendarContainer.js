import { connect } from 'react-redux';
import Calendar from '../../components/reservation-pieces/calendar.jsx';
// import ACTION from '../../actions/TimeSlots';

const mapDispatchToProps = (dispatch) => ({
  // code here for dispatch
});

const mapStateToProps = (state) => {
  name: state.nameFromState
};

const CalendarContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Calendar);

export default CalendarContainer;
