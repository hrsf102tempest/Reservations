const changeStatus = (status) => {
  const action = {
    type: 'NEW_SHOW',
    showStatus: {
      showCalendar: status,
    },
  };
  return action;
};

export default changeStatus;
