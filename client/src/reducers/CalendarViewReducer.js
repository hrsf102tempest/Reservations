const init = {
  day: new Date().getDate(),
  date: new Date(),
  daysOut: 0,
};

const CalendarViewReducer = (state = init, action) => {
  let newState = {};

  if (action.type === 'NEW_VIEWED_DAY') {
    newState = action;
  } else {
    return state;
  }
  return newState;
};

export default CalendarViewReducer;
