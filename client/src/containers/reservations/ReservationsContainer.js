import React from 'react';
import { connect } from 'react-redux';
import Reservations from '../../components/Reservations.jsx';
// import ACTION from '../../actions/Reservations';

const mapDispatchToProps = (dispatch) => ({
  // code here for dispatch
});

const mapStateToProps = (state) => { name: state.nameFromState };

const ReservationsContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Reservations);

export default ReservationsContainer;
