import React from 'react';
import $ from 'jquery';
import styled from 'styled-components';
import TimeSlotsContainer from '../containers/reservations/TimeSlotsContainer';
import PeoplePerResContainer from '../containers/reservations/PeoplePerResContainer';
import FindTableContainer from '../containers/reservations/FindTableContainer';
import CalendarContainer from '../containers/reservations/CalendarContainer';
import Cal from './calendarIcon.jsx';

const Title = styled.p`
  font-size: 16px;
  font-weight: 700;
  line-height: 21px;
  margin: 0;
  display: inline-block;
  position: relative;
  bottom: 6px;
`;

Title.displayName = 'Title';

const Wrapper = styled.section`
  height: 25px;
  width: 265px;
  // border: 1px solid black;
  // border-radius: 10px;
  margin: 10px 0px 5px 0;
  text-align: left;
  padding: 5px 15px 5px 0;
`;

Wrapper.displayName = 'ResWrapper';

const ResBox = styled.div`
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  height: 164px;
  width: 298px;
  border: 1px solid black;
  border-radius: 10px;
`;

ResBox.displayName = 'ResBox';

const CalWrapper = styled.div`
  display: inline-block;
  margin: 0px 12px;
`;

CalWrapper.displayName = 'CalWrapper';

class Reservations extends React.Component {
  componentDidMount() {
    this.fetch(7);
  }

  fetch(id) {
    $.ajax({
      url: `http://localhost:3001/businesses/${id}`,
      success: (response) => {
        const { newBusinessSelected } = this.props;
        newBusinessSelected(response[0]);
      },
    });
  }


  render() {
    return (
      <ResBox>
        <Wrapper>
          <CalWrapper>
            { Cal(24) }
          </CalWrapper>
          <Title>Make a Reservation</Title>
        </Wrapper>
        <CalendarContainer />
        <TimeSlotsContainer />
        <PeoplePerResContainer />
        <FindTableContainer />

        <h5>
          
        </h5>
      </ResBox>
    );
  }
}

export default Reservations;
