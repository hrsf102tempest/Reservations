import { connect } from 'react-redux';
import FindTable from '../../components/reservation-pieces/findTable.jsx';
// import ACTION from '../../actions/TimeSlots';

const mapDispatchToProps = (dispatch) => ({
  // code here for dispatch
});

const mapStateToProps = (state) => {
  name: state.nameFromState
};

const FindTableContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(FindTable);

export default FindTableContainer;
