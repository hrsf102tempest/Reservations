import React from 'react';
import styled from 'styled-components';

const StyledTimes = styled.h4`
  width: 135px;
  height: 30px;
  border: 1px solid black;
  border-radius: 5px;
  margin: 2px 1px 2px 9px;
  display: inline-block;
`;

const Wrapper = styled.div`
  display: inline-block;
`;

const TimeSlots = (props) => {

  return (
    <Wrapper>
      <StyledTimes>TimeSlot block</StyledTimes>
    </Wrapper>
  );
};


export default TimeSlots;
