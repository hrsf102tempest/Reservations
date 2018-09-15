const init = {
  showCalendar: false,
};

const CalendarReducer = (state = init, action) => {
  let newState = {};

  if (action.type === 'NEW_SHOW') {
    newState = action.showStatus;
  } else {
    return state;
  }

  return newState;
};

export default CalendarReducer;
