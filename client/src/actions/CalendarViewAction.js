
const changeViewedDay = (day) => {
  const obj = {
    type: 'NEW_VIEWED_DAY',
    date: day,
  };
  return obj;
};

export default changeViewedDay;
