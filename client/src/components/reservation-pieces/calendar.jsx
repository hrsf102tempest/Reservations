import React from 'react';
import styled from 'styled-components';

const StyledCalendar = styled.h4`
  width: 275px;
  height: 22px;
  border: 1px solid black;
  border-radius: 10px;
  text-align: center;
  margin: 2px 9px;
  padding: 5px 1px 0px;
`;

const Calendar = (props) => {

  return (

    <StyledCalendar>This is the Calendar block</StyledCalendar>

  );
};


export default Calendar;
