const changeDate = (date) => {
  const action = {
    type: 'NEW_DATE',
    month: date,
  };
  return action;
};

export default changeDate;
