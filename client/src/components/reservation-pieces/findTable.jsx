import React from 'react';
import styled from 'styled-components';

const StyledFind = styled.button`
  width: 278px;
  height: 30px;
  border: 1px solid rgb(40, 120, 30);
  border-radius: 5px;
  margin: 6px 1px 2px 9px;
  background-color: rgb(65, 197, 50);
  font-weight: 700;
  color: white;
  font-size: 12px;
  box-shadow: 0 1px 1px rgba(0,0,0,0.3)

  :focus {
    outline: none;
  }
`;

StyledFind.displayName = 'StyledFind';

const Wrapper = styled.div`
  display: inline-block;
`;

const FindTable = () => {
  return (
    <Wrapper>
      <StyledFind>Find a Table</StyledFind>
    </Wrapper>
  );
};


export default FindTable;
