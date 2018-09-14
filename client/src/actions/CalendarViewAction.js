
const changeViewedDay = (day) => {
  const obj = {
    type: 'NEW_VIEWED_DAY',
    date: day,
  };
  console.log(obj);
  return obj;
};

export default changeViewedDay;
