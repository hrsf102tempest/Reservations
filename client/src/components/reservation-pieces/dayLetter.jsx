import React from 'react';
import styled from 'styled-components';

const StyledWeek = styled.div`
  -webkit-appearance: none;
  text-align: left;
  display: inline-block;
`;

const StyledLetter = (width) => {
  const obj = styled.div`
    display: inline-block;
    font-size: 12px;
    width: ${width}px;
    height: 17px;
    padding: 3px;
    font-weight: 700;
    color: red;
    text-align: center;
  `;

  return obj;
};

const Letters = () => {
  const letters = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
  const weekLetters = letters.map((letter, index) => {
    if (index === 6) {
      const LetterDiv = StyledLetter(32);
      return (
        <LetterDiv>
          { letter }
        </LetterDiv>
      );
    }

    const LetterDiv = StyledLetter(33);
    return (
      <LetterDiv>
        { letter }
      </LetterDiv>
    );
  });

  return (
    <StyledWeek>
      { weekLetters }
    </StyledWeek>
  );
};

export default Letters;
