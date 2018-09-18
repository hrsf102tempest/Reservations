import React from 'react';
import styled from 'styled-components';
import CalendarHeadContainer from '../../containers/reservations/CalendarHeadContainer';
import CalendarViewContainer from '../../containers/reservations/CalendarViewContainer';

const StyledCalendar = styled.div`
  border: 1px solid rgb(204, 204, 204);
  border-radius: 5px;
  width: 272px;
`;

StyledCalendar.displayName = 'StyledCalendar';

StyledCalendar.displayName = 'StyledCalendar';

const CalendarFull = () => {
  return (
    <StyledCalendar>
      <CalendarHeadContainer />
      <CalendarViewContainer />
    </StyledCalendar>
  );
};

export default CalendarFull;
