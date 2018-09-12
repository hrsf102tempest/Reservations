import React from 'react';
import styled from 'styled-components';

const StyledCalendar = styled.h4`
  width: 275px;
  height: 22px;
  border: 1px solid black;
  border-radius: 5px;
  text-align: center;
  margin: 2px 9px;
  padding: 5px 1px 0px;
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
      <StyledCalendar>{ this.date() }</StyledCalendar>
    );
  }
}


export default Calendar;
