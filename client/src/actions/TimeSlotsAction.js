const changeTime = (newTime) => {
  const action = {
    type: 'NEW_TIME',
    time: newTime,
  };
  return action;
};

export default changeTime;
