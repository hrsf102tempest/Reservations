import React from 'react';
import styled from 'styled-components';
import CalendarHead from './calendarHead.jsx';
import Days from './calendarView.jsx';

const StyledCalendar = styled.div`
  margin-top: 20px;
  border: 1px solid black;
  border-radius: 5px;
  width: 273px;
`;

StyledCalendar.displayName = 'StyledCalendar';

class CalendarFull extends React.Component {
  render() {
    return (
      <StyledCalendar>
        <CalendarHead date={new Date()}/>
        <Days month={8} year={2018} />
      </StyledCalendar>
    )
  }
}

export default CalendarFull;
