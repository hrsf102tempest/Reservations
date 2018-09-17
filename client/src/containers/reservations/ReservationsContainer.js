import { connect } from 'react-redux';
import Reservations from '../../components/Reservations.jsx';
import changeBusiness from '../../actions/ReservationsAction';
import changeStatus from '../../actions/CalendarAction';
import changeDate from '../../actions/CalendarViewAction';


const mapDispatchToProps = (dispatch) => {
  const obj = {
    newBusinessSelected: (business) => {
      dispatch(changeBusiness(business));
    },
    hideCalendar: () => {
      dispatch(changeStatus(false));
    },
    newViewedDate: (date) => {
      dispatch(changeDate(date));
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
