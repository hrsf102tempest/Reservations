import React from 'react';
import styled from 'styled-components';

const arrow = 'https://image.flaticon.com/icons/svg/60/60995.svg';

const Down = (size) => {
  const StyledArrow = styled.img`
  height: ${size}px;
  width: auto;
  margin: 0 0 2px -4px;
  position: relative;
  top: 2px;
`;

  return (
    <StyledArrow src={arrow} />
  );
};

export default Down;
