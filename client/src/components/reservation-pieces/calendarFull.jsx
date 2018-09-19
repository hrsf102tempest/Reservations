import React from 'react';
import styled from 'styled-components';
import CalendarHeadContainer from '../../containers/reservations/CalendarHeadContainer';
import CalendarViewContainer from '../../containers/reservations/CalendarViewContainer';

const StyledCalendar = styled.div`
  border: 1px solid rgb(204, 204, 204);
  border-radius: 5px;
  width: 272px;
`;

const DivPoint = styled.div`
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
  border-left: 1px solid rgb(204, 204, 204);
  border-top: 1px solid rgb(204, 204, 204);
  height: 13px;
  width: 13px;
  display: inline-block;
  background-color: white;
  background: linear-gradient(135deg, rgba(255,255,255,1) 0%,rgba(255,255,255,1) 50%,rgba(255,255,255,0) 54%);
  position: absolute;
  left: 125px;
  top: -6px;
`;

StyledCalendar.displayName = 'StyledCalendar';

StyledCalendar.displayName = 'StyledCalendar';

const CalendarFull = () => (
  <StyledCalendar>
    <DivPoint />
    <CalendarHeadContainer />
    <CalendarViewContainer />
  </StyledCalendar>
);


export default CalendarFull;
