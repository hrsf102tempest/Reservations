import React from 'react';
import styled from 'styled-components';

const img = 'https://visualpharm.com/assets/805/Event-595b40b85ba036ed117dc50f.svg';

const Cal = (size) => {
  const StyledCal = styled.img`
  display: inline-block;
  height: ${size}px;
  width: ${size}px;
  margin: 0 12px;
`;

  return (
    <StyledCal src={img} />
  );
};

export default Cal;
