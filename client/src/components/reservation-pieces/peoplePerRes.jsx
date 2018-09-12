import React from 'react';
import styled from 'styled-components';

const StyledPeoplePer = styled.h4`
  width: 135px;
  height: 30px;
  border: 1px solid black;
  border-radius: 10px;
  margin: 2px 4px 2px 1px;
`;

const Wrapper = styled.div`
  display: inline-block;
`;
const PeoplePerRes = (props) => {

  return (
    <Wrapper>
      <StyledPeoplePer>PeoplePer block</StyledPeoplePer>
    </Wrapper>
  );
};


export default PeoplePerRes;
