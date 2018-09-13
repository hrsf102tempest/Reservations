const findTime = (date = new Date()) => {
  const time = date.getHours() * 100 + date.getMinutes();
  if (time % 100 > 30) {
    return Math.ceil(time / 100) * 100;
  }
  return Math.floor(time / 100) * 100 + 30;
};

const init = {
  time: findTime(),
  day: new Date().getDay(),
};

const TimeSlotsReducer = (state = init, action) => {
  let newState = {};

  if (action.type === 'NEW_TIME') {
    newState = action.time;
  } else {
    return state;
  }

  return newState;
};

export default TimeSlotsReducer;
