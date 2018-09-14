import React from 'react';
import styled from 'styled-components';

const StyledDay = styled.div`
  display: inline-block;
  text-align: center;
  height: 30px;
  width: 32px;
  border-top: 1px solid rgb(204, 204, 204);
  border-right: 1px solid rgb(204, 204, 204);
  border-bottom: 0px none rgb(51, 51, 51);
  border-left: 0px none rgb(51, 51, 51);
  padding: 3px;
  line-height: 30px;
  box-shadow: rgb(205, 218, 226) 0px 0px 2px 0px inset;
  padding: 3px;
  line-height: 30px;

  &:hover {
    background: grey;
  }
`;

const StyledDayEmpty = styled.div`
  display: inline-block;
  text-align: center;
  height: 30px;
  width: 32px;
  border-top: 1px solid rgb(204, 204, 204);
  border-right: 1px solid rgb(204, 204, 204);
  border-bottom: 0px none rgb(51, 51, 51);
  border-left: 0px none rgb(51, 51, 51);
  padding: 3px;
  line-height: 30px;
  box-shadow: rgb(205, 218, 226) 0px 0px 2px 0px inset;
  padding: 3px;
  line-height: 30px;
  color: rgba(0, 0, 0, 0);
`;

const ValidDay = styled.div`
  display: inline-block;
  text-align: center;
  height: 30px;
  width: 32px;
  border-top: 1px solid rgb(204, 204, 204);
  border-right: 1px solid rgb(204, 204, 204);
  border-bottom: 0px none rgb(51, 51, 51);
  border-left: 0px none rgb(51, 51, 51);
  padding: 3px;
  line-height: 30px;
  box-shadow: rgb(205, 218, 226) 0px 0px 2px 0px inset;

  &:hover {
    background: rgb(240, 243, 248);
  }
  `;

ValidDay.displayName = 'ValidDay';

const CurrentDay = styled.div`
  display: inline-block;
  text-align: center;
  font-weight: 700;
  height: 30px;
  width: 32px;
  border-top: 1px solid rgb(204, 204, 204);
  border-right: 1px solid rgb(204, 204, 204);
  border-bottom: 0px none rgb(51, 51, 51);
  border-left: 0px none rgb(51, 51, 51);
  padding: 3px;
  line-height: 30px;
  box-shadow: rgb(205, 218, 226) 0px 0px 2px 0px inset;
  padding: 3px;
  line-height: 30px;
  color: white;
  background-color: rgba(207, 18, 0, 0.8);
`;

CurrentDay.displayName = 'CurrentDay';


const InvalidDay = styled.div`
  display: inline-block;
  text-align: center;
  color: rgb(204, 204, 204);
  height: 30px;
  width: 32px;
  border-top: 1px solid rgb(204, 204, 204);
  border-right: 1px solid rgb(204, 204, 204);
  border-bottom: 0px none rgb(51, 51, 51);
  border-left: 0px none rgb(51, 51, 51);
  padding: 3px;
  line-height: 30px;
  box-shadow: rgb(205, 218, 226) 0px 0px 2px 0px inset;
  padding: 3px;
  line-height: 30px;

  &:hover {
    cursor: pointer;
  }
`;

InvalidDay.displayName = 'InvalidDay';

const StyledView = styled.div`
  font-size: 14px;
`;

const StyledWeek = styled.div`
  display: inline-block;
`;

const Days = (props) => {
  const { month, year, daysOut } = props;

  const divDate = (targetDay) => {
    const result = new Date(year, month, targetDay);
    return result;
  };

  const farthest = divDate(30);
  const currentDate = divDate(new Date().getDate());

  const calendarMatrix = (monthGiven, yearGiven) => {
    const longMonths = [0, 2, 4, 6, 7, 9, 11];
    const firstDay = (new Date(yearGiven, monthGiven)).getDay();
    const matrix = Array(6).fill(null).map(() => Array(7).fill(undefined));
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
      matrix[Math.floor((firstDay + i) / 7)][(firstDay + i) % 7] = i + 1;
    }
    return matrix;
  };

  const calendarDays = calendarMatrix(month, year).map((days) => {
    const week = days.map((day) => {
      const dayDate = divDate(day);
      if (day === undefined) {
        return (
          <StyledDayEmpty>
            {'a'}
          </StyledDayEmpty>
        );
      }

      if (dayDate < currentDate) {
        return (
          <InvalidDay>
            { day }
          </InvalidDay>
        );
      }

      if (dayDate.getDate() === currentDate.getDate() && dayDate.getMonth() === currentDate.getMonth()) {
        return (
          <CurrentDay>
            { day }
          </CurrentDay>
        );
      }

      if (dayDate > currentDate && dayDate <= farthest) {
        return (
          <ValidDay>
            { day }
          </ValidDay>
        );
      }


      return (
        <InvalidDay>
          { day }
        </InvalidDay>
      );
    });

    return (
      <StyledWeek>
        { week }
      </StyledWeek>
    );
  });

  return (
    <StyledView>
      { calendarDays }
    </StyledView>
  );
};

export default Days;
