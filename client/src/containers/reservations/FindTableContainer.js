import { connect } from 'react-redux';
import FindTable from '../../components/reservation-pieces/findTable';
// import ACTION from '../../actions/TimeSlots';

const mapDispatchToProps = (dispatch) => ({
  // code here for dispatch
});

const mapStateToProps = (state) => {
};

const FindTableContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(FindTable);

export default FindTableContainer;
