
const changeMonthYear = (month, year) => {
  const obj = {
    type: 'NEW_MONTH_YEAR',
    month,
    year,
  };
  return obj;
};

export default changeMonthYear;
