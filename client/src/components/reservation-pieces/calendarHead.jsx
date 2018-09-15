import React from 'react';
import styled from 'styled-components';
import Letters from './dayLetter.jsx';

const Wrapper = styled.div`
  text-align: center;
`;

Wrapper.displayName = 'CalHeadWrapper';

const StyledBack = styled.div`
  test-align: center;
  display: inline-block;
  width: 20px;
  height: 20px;
  margin: 2px;
  float: left;
  padding-left: 5px;
  position: relative;
  bottom: 2px;
`;

StyledBack.displayName = 'StyledBack';

const StyledForward = styled.div`
  test-align: center;
  display: inline-block;
  width: 20px;
  height: 20px;
  margin: 2px;
  float: right;
  padding-right: 5px;
  position: relative;
  bottom: 2px;
`;

StyledForward.displayName = 'StyledForward';

const StyledText = styled.p`
  font-size: 14px;
  font-weight: 700;
  width: 210px;
  text-align: center;
  display: inline-block;
  margin: 2px;
`;

StyledText.displayName = 'StyledText';

const CalendarHead = (props) => {
  const { month, year, newDate } = props;
  const getMonth = () => {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    return months[month];
  };

  const monthYear = `${getMonth()} ${year}`;

  const newMonthYear = (str) => {
    console.log(str, month, year);
    if (str === 'back') {
      if (month === 0) {
        return [11, year - 1];
      }
      return [month - 1, year];
    }
    if (month === 11) {
      return [0, year + 1];
    }
    return [month + 1, year];
  };

  return (
    <div>
      <StyledBack onClick={() => newDate(...newMonthYear('back'))}>{'<'}</StyledBack>
      <StyledText>{ monthYear }</StyledText>
      <StyledForward onClick={() => newDate(...newMonthYear('forward'))}>{'>'}</StyledForward>
      <Letters />
    </div>
  );
};

export default CalendarHead;
