import React from 'react';
import styled from 'styled-components';
// import CalendarHead from './calendarHead.jsx';
import CalendarHeadContainer from '../../containers/reservations/CalendarHeadContainer';
import CalendarViewContainer from '../../containers/reservations/CalendarViewContainer';
// import Days from './calendarView.jsx';

const StyledCalendar = styled.div`
  border: 1px solid rgb(204, 204, 204);
  border-radius: 5px;
  width: 272px;
`;

StyledCalendar.displayName = 'StyledCalendar';

StyledCalendar.displayName = 'StyledCalendar';

class CalendarFull extends React.Component {
  render() {
    return (
      <StyledCalendar>
        <CalendarHeadContainer />
        <CalendarViewContainer />
      </StyledCalendar>
    )
  }
}

export default CalendarFull;
