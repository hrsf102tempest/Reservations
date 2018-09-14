
const changeMonthYear = (month, year) => {
  const obj = {
    type: 'NEW_MONTH_YEAR',
    month,
    year,
  };
  console.log(obj);
  return obj;
};

export default changeMonthYear;
