import { connect } from 'react-redux';
import Reservations from '../../components/Reservations';
import changeBusiness from '../../actions/ReservationsAction';

const mapDispatchToProps = (dispatch) => {
  const obj = {
    newBusinessSelected: (business) => {
      dispatch(changeBusiness(business));
    },
  };
  return obj;
};

const mapStateToProps = (state) => {
  const props = {
    business: state.ReservationsReducer,
    showCalendar: state.CalendarReducer.showCalendar,
    date: state.CalendarViewReducer.date,
  };
  return props;
};

const ReservationsContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Reservations);

export default ReservationsContainer;
