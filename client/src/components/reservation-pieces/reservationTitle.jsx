import React from 'react';
import styled from 'styled-components';

const StyledTitle = styled.p`
  font-size: 16px;
  font-weight: 700;
  line-height: 21px;
  margin: 0;
  display: inline-block;
  position: relative;
  bottom: 6px;
`;

const Title = () => {
  return (
    <StyledTitle>Make a Reservation</StyledTitle>
  )
}

export default Title;
