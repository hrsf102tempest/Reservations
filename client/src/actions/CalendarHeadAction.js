

const changeMonthYear = (month, year) => {
  const obj = {
    action: 'NEW_MONTH_YEAR',
    date: {
      month,
      year,
    },
  };
  return obj;
};

export default changeMonthYear;
