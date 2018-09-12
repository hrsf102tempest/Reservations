import React from 'react';
import styled from 'styled-components';

const StyledFind = styled.h4`
  width: 275px;
  height: 30px;
  border: 1px solid black;
  border-radius: 10px;
  margin: 2px 1px 2px 9px;
`;

const Wrapper = styled.div`
  display: inline-block;
`;

const FindTable = (props) => {

  return (
    <Wrapper>
      <StyledFind>This is the FindTable block</StyledFind>
    </Wrapper>
  );
};


export default FindTable;
