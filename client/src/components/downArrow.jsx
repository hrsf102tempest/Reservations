import React from 'react';
import styled from 'styled-components';

const arrow = 'https://image.flaticon.com/icons/svg/60/60995.svg';

const Down = (size) => {
  const StyledArrow = styled.img`
  height: ${size}px;
  width: auto;
  margin: 10px 10px 0px 0px;
  position: relative;
  float: right;
  z-index: 1
`;

  return (
    <StyledArrow src={arrow} />
  );
};

export default Down;
