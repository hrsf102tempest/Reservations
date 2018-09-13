import { connect } from 'react-redux';
import PeoplePerRes from '../../components/reservation-pieces/peoplePerRes.jsx';
// import ACTION from '../../actions/TimeSlots';

const mapDispatchToProps = (dispatch) => ({
  // code here for dispatch
});

const mapStateToProps = (state) => {
  const props = {
    maxPeople: state.ReservationsReducer === null ? null : state.ReservationsReducer.people_per_reservation,
  };
  return props;
};

const PeoplePerResContainer = connect(
  mapStateToProps,
  null,
)(PeoplePerRes);

export default PeoplePerResContainer;
