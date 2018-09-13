const init = {
  date: new Date(),
};

const CalendarReducer = (state = init, action) => {
  let newState = {};

  if (action.type === 'NEW_DATE') {
    newState = action.date;
  } else {
    return state;
  }

  return newState;
};

export default CalendarReducer;
