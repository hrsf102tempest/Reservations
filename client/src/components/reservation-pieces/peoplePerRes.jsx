import React from 'react';
import styled from 'styled-components';
import icon from '../../../../icon.png';
import Down from '../downArrow';

const Wrapper = styled.div`
  display: inline-block;
  margin-left: 12px;
`;

const SelectWrapper = styled.select`
  -webkit-appearance: none;
  display: inline-block;
  padding: 6px 35px;
  position: relative;
  z-index: 2;
  font-size: 14px;
  border: 1px solid rgb(204,204,204);
  background-color: rgba(0,0,0,0);

  :focus {
    outline: none;
    border-color: rgb(0, 115, 187);
  }
`;

SelectWrapper.displayName = 'SelectWrapper';

const StyledIcon = styled.img`
  height: 18px;
  width: auto;
  display: inline-block;
  padding: 5px 5px 0px 5px;
  position: absolute;
  z-index: 1;
`;

const DownWrapper = styled.div`
  display: inline-block;
  position: absolute;
  width: 0px;
  z-index: 1;
`;

const PeoplePerRes = (props) => {
  const { maxPeople } = props;
  const optionText = [];

  for (let i = 1; i <= maxPeople; i += 1) {
    let text;
    if (i === 1) {
      text = '1 person';
    } else {
      text = `${i} people`;
    }
    optionText.push(text);
  }

  const options = optionText.map((filler, index) => {
    return (
      <option className={`entry${index}`}>
        { filler }
      </option>
    );
  });

  return (
    <Wrapper>
      <StyledIcon src={icon} />
      <SelectWrapper>
        { options }
      </SelectWrapper>
      <DownWrapper>
        { Down(7) }
      </DownWrapper>

    </Wrapper>
  );
};


export default PeoplePerRes;
