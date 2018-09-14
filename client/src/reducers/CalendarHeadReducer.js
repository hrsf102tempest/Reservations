const init = {
  date: {
    month: new Date().getMonth(),
    year: new Date().getMonth(),
  },
};

const CalendarHeadReducer = (state = init, action) => {
  let newState = {};

  if (action.type === 'NEW_MONTH_YEAR') {
    newState = action.date;
  } else {
    return state;
  }

  return newState;
};

export default CalendarHeadReducer;
