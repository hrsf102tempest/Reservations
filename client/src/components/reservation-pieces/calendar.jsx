import React from 'react';
import styled from 'styled-components';
import Cal from '../calendarIcon';
import Down from '../downArrow';

const StyledCal = styled.span`
  height: 16px;
  width: auto;
  opacity: 0.6;
  margin: 0px 0px;
  float: left;
  position: relative;
  left: 5px;
  top: 0px;
`;

const StyledCalendar = styled.button`
  -webkit-appearance: none;
  width: 275px;
  height: 26px;
  border: 1px solid rgb(204, 204, 204);
  border-radius: 5px;
  text-align: center;
  margin: 7px 9px 0 9px;
  padding: 0px;
  position: relative;
  bottom: 5px;
  z-index: 0;

  :focus {
    outline: none;
    border-color: rgb(0, 115, 187);
  }
`;

const StyledDate = styled.p`
  font-size: 14px;
  font-weight: 400;
  display: inline-block;
  margin: 0;
  position: relative;
  bottom: 3px;
  left: 5px;
  text-align: left;
  z-index: 1;
  width: 226px;
  background-color: rgba(0,0,0,0);
`;

StyledDate.displayName = 'StyledDate';

const StyledDown = styled.div`
  display: inline-block;
  width: 20px;
  position: relative;
  bottom: 5px;
  z-index: 0;
  float: right;
  right: 5px;
`;

class Calendar extends React.Component {
  date() {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const { date } = this.props;
    const day = days[date.getDay()];
    const month = months[date.getMonth()];

    return `${day}, ${month} ${date.getDate()}, ${date.getFullYear()}`;
  }

  render() {
    return (

      <StyledCalendar>
        <span>
          <StyledCal>
            { Cal(16) }
          </StyledCal>
        </span>
        <StyledDate onClick={() => this.props.newStatus(!(this.props.showCalendar))}>{ this.date()}</StyledDate>
        <StyledDown>
          { Down(7) }
        </StyledDown>
      </StyledCalendar>

    );
  }
}


export default Calendar;
