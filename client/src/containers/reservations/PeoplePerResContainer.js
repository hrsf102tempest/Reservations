import { connect } from 'react-redux';
import PeoplePerRes from '../../components/reservation-pieces/peoplePerRes.jsx';
// import ACTION from '../../actions/TimeSlots';

const mapDispatchToProps = (dispatch) => ({
  // code here for dispatch
});

const mapStateToProps = (state) => {
  name: state.nameFromState
};

const PeoplePerResContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(PeoplePerRes);

export default PeoplePerResContainer;
