import React from 'react';
import styled from 'styled-components';
import Down from '../downArrow.jsx';

const clockImg = 'https://visualpharm.com/assets/704/Clock-595b40b75ba036ed117d92ff.svg';

const StyledClock = styled.img`
  height: 18px;
  width: auto;
  opacity: 0.6;
  display: inline-block;
  padding: 5px 5px 0px 5px;
`;

const StyledTimes = styled.div`
  width: 135px;
  height: 30px;
  border: 1px solid black;
  border-radius: 5px;
  margin: 2px 1px 2px 9px;
  display: inline-block;
`;

const StyledText = styled.p`
  font-size: 14px;
  font-weight: 400;
  display: inline-block;
  padding: 0px 5px 0px 15px;
  line-height: 0px;
  position: relative;
  bottom: 3px;
`;

const Wrapper = styled.div`
  display: inline-block;
`;

class TimeSlots extends React.Component {
  todaysHours() {
    const { date } = this.props;
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const day = date === undefined ? 1 : days[date.getDay()];
    const { hours } = this.props;
    if (hours) {
      return hours[day];
    }
    return 'TODAY';
  }

  initialTime() {
    const { date } = this.props;
    const findTime = (today) => {
      const time = today.getHours() * 100 + today.getMinutes();
      if (time % 100 > 30) {
        return Math.ceil(time / 100) * 100;
      }
      return Math.floor(time / 100) * 100 + 30;
    };
    const result = findTime(date);
    return result;
  }

  formatTime() {
    const timeTwentyFour = this.initialTime();
    let hours = Math.floor(timeTwentyFour / 100);
    let minutes = timeTwentyFour % 100;
    let amPm;
    if (hours > 12) {
      hours -= 12;
      amPm = 'pm';
    } else if (hours === 12) {
      amPm = 'pm';
    } else {
      amPm = 'am';
    }
    if (minutes % 10 === 0) {
      minutes += '0';
    }
    return `${hours}:${minutes} ${amPm}`;
  }

  render() {
    console.log('TimeSlots : ', this.props);
    return (
      <Wrapper>
        <StyledTimes>
          <span>
            <StyledClock src={clockImg} />
          </span>
          <StyledText>
            {this.formatTime()}
          </StyledText>
          <span>
            { Down(10) }
          </span>
        </StyledTimes>
      </Wrapper>
    );
  }
};


export default TimeSlots;
