import { connect } from 'react-redux';
import TimeSlots from '../../components/reservation-pieces/timeSlots.jsx';
// import ACTION from '../../actions/TimeSlots';

const mapDispatchToProps = (dispatch) => ({
  // code here for dispatch
});

const mapStateToProps = (state) => {
  name: state.nameFromState
};

const TimeSlotsContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(TimeSlots);

export default TimeSlotsContainer;
