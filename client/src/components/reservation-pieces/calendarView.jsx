import React from 'react';
import styled from 'styled-components';

const StyledDay = styled.div`
  display: inline-block;
  text-align: center;
  height: 30px;
  width: 31px;
  border: 1px solid grey;
  padding: 3px;
  line-height: 30px;
`;

const StyledDayEmpty = styled.div`
  display: inline-block;
  text-align: center;
  height: 30px;
  width: 31px;
  border: 1px solid grey;
  padding: 3px;
  line-height: 30px;
  color: rgba(0, 0, 0, 0);
`;

const StyledWeek = styled.div`
  display: inline-block;
`;

const Days = (props) => {
  const { month, year } = props;
  const calendarMatrix = (monthGiven, yearGiven) => {
    const longMonths = [0, 2, 4, 6, 7, 9, 11]
    const firstDay = (new Date(yearGiven, monthGiven)).getDay();
    let matrix = Array(6).fill(null).map(() => Array(7).fill(undefined));
    let daysPerMonth = 30;

    if (longMonths.indexOf(monthGiven) !== -1) {
      daysPerMonth = 31;
    }

    if (monthGiven === 1) {
      if (yearGiven % 4 === 0) {
        daysPerMonth = 29;
      } else {
        daysPerMonth = 28;
      }
    }

    for (let i = 0; i < daysPerMonth; i += 1) {
      matrix[Math.floor((firstDay + i) / 7)][(firstDay + i) % 7] = i + 1
    }
    return matrix;
  };

  const calendarDays = calendarMatrix(month, year).map((days) => {
    const week = days.map((day) => {
      if (day === undefined) {
        return (
          <StyledDayEmpty>
            { 'a' }
          </StyledDayEmpty>
        );
      }
      return (
        <StyledDay>
          { day }
        </StyledDay>
      );
    });

    return (
      <StyledWeek>
        { week }
      </StyledWeek>
    );
  });

  return (
    <div>
      { calendarDays }
    </div>
  );
};

export default Days;
