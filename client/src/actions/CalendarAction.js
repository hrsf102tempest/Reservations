const changeMonth = (monthNumber) => {
  const action = {
    type: 'NEW_Month',
    month: monthNumber,
  };
  return action;
};

export default changeMonth;
