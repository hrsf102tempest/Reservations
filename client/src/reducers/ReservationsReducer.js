const ReservationsReducer = (state = null, action) => {
  let newState = {};

  if (action.type === 'NEW_BUSINESS') {
    newState = action.business;
  } else {
    return state;
  }

  return newState;
};

export default ReservationsReducer;
