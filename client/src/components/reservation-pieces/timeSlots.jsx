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
  position: absolute;
  z-index: -1;
`;

const StyledTimes = styled.div`
  width: 140px;
  height: 30px;
  // border: 1px solid black;
  // border-radius: 5px;
  margin: 2px 1px 2px 9px;
  display: inline-block;
`;

const Wrapper = styled.select`
  -webkit-appearance: none;
  display: inline-block;
  padding: 8px 42px;
  background-color: rgba(0, 0, 0, 0);
  z-index: 0;

  :focus {
    outline: none;
    border-color: rgb(0, 115, 187);
  }
`;

Wrapper.displayName = 'SelectWrapper';

const DownWrapper = styled.div`
  display: inline-block;
  position: absolute;
  width: 0px;
  z-index: -1;
`;

class TimeSlots extends React.Component {
  todaysHours() {
    const { date } = this.props;
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const day = date === undefined ? 0 : days[date.getDay()];
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

  formatTime(timeTwentyFour = this.initialTime()) {
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
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }
    return `${hours}:${minutes} ${amPm}`;
  }

  availableTimes() {
    const timesArray = [];
    const convert30to50 = (str) => {
      if (Number(str) % 100 === 30) {
        return Number(str) + 20;
      }
      return Number(str);
    };

    const convert50to30 = (str) => {
      if (Number(str) % 100 === 50) {
        return Number(str) - 20;
      }
      return Number(str);
    };

    const timesForWindow = (arr) => {
      const open = convert30to50(arr[0]);
      const close = convert30to50(arr[1]);
      const slots = (close - open) / 50;

      for (let i = 0; i < slots - 2; i += 1) {
        const timeSlot = (open + (i * 50));
        timesArray.push(convert50to30(timeSlot));
      }
    };

    const openClose = this.todaysHours().split('-');

    timesForWindow(openClose.slice(0, 2));
    if (openClose.length > 2) {
      timesForWindow(openClose.slice(2));
    }

    const formattedTimes = timesArray.map(time => this.formatTime(time));
    return formattedTimes;
  }

  makeOptions() {
    const array = this.availableTimes();
    const options = array.map((timeString) => {
      return (
        <option>
          {timeString}
        </option>
      );
    });

    return options;
  }

  render() {
    return (
      <StyledTimes>
        <span>
          <StyledClock src={clockImg} />
        </span>
        <Wrapper>
          { this.makeOptions() }
        </Wrapper>
        <DownWrapper>
          {Down(7)}
        </DownWrapper>
      </StyledTimes>
    );
  }
}


export default TimeSlots;
