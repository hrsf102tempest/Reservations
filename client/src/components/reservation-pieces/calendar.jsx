import React from 'react';
import styled from 'styled-components';
import Cal from '../calendarIcon.jsx';
import Down from '../downArrow.jsx';

const StyledCal = styled.span`
  height: 16px;
  width: auto;
  opacity: 0.6;
  position: relative;
  right: 10px;
`;

const StyledCalendar = styled.div`
  width: 275px;
  height: 22px;
  border: 1px solid black;
  border-radius: 5px;
  text-align: center;
  margin: 7px 9px 0 9px;
  padding: 5px 1px 0px;
  position: relative;
  bottom: 5px;
`;

const StyledDate = styled.p`
  font-size: 14px;
  font-weight: 400;
  display: inline-block;
  margin: 0;
  position: relative;
  bottom: 3px;
  right: 16px;
`;

const StyledDown = styled.div`
  display: inline-block;
  width: 20px;
  position: relative;
  bottom: 5px;
`;

class Calendar extends React.Component {
  date(num = 0) {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    const { date } = this.props;
    const day = days[date.getDay()];
    const month = months[date.getMonth()];

    return `${day}, ${month} ${date.getDate()}, ${date.getFullYear()}`;
  }

  render() {
    console.log(this.props);
    return (

      <StyledCalendar>
        <span>
          <StyledCal>
            { Cal(16) }
          </StyledCal>
        </span>
        <StyledDate>{ this.date()}</StyledDate>
        <StyledDown>
          { Down(10) }
        </StyledDown>
      </StyledCalendar>

    );
  }
}


export default Calendar;
