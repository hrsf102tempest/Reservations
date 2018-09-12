const changeTime = (newTime) => {
  const action = {
    type: 'NEW_Time',
    time: newTime,
  };
  return action;
};

export default changeTime;
