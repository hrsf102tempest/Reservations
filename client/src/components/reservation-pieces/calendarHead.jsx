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
  const { date } = props;
  const getMonth = () => {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    return months[date.getMonth()];
  };

  const monthYear = `${getMonth()} ${date.getFullYear()}`;

  return (
    <div>
      <StyledBack>{'<'}</StyledBack>
      <StyledText>{ monthYear }</StyledText>
      <StyledForward>{'>'}</StyledForward>
      <Letters />
    </div>
  );
};

export default CalendarHead;
