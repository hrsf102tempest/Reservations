import React from 'react';
import styled from 'styled-components';

const StyledWeek = styled.div`
  -webkit-appearance: none;
  text-align: left;
  display: inline-block;
`;

const StyledLetter = styled.div`
  display: inline-block;
  width: 33px;
  height: 17px;
  padding: 3px;
  font-weight: 700;
  color: red;
  text-align: center;
`;

const Letters = () => {
  const letters = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
  const weekLetters = letters.map((letter) => {
    return (
      <StyledLetter>
        { letter }
      </StyledLetter>
    );
  });

  return (
    <StyledWeek>
      { weekLetters }
    </StyledWeek>
  );
};

export default Letters;
