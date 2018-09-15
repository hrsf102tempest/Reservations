const init = {
  month: new Date().getMonth(),
  year: new Date().getFullYear(),
};

const CalendarHeadReducer = (state = init, action) => {
  let newState = {};

  if (action.type === 'NEW_MONTH_YEAR') {
    newState = action;
  } else {
    return state;
  }
  return newState;
};

export default CalendarHeadReducer;
