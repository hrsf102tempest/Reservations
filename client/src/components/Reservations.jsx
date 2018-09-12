import React from 'react';
import $ from 'jquery';
import styled from 'styled-components';
import TimeSlotsContainer from '../containers/reservations/TimeSlotsContainer';
import PeoplePerResContainer from '../containers/reservations/PeoplePerResContainer';
import FindTableContainer from '../containers/reservations/FindTableContainer';
import CalendarContainer from '../containers/reservations/CalendarContainer';

const img = 'https://visualpharm.com/assets/805/Event-595b40b85ba036ed117dc50f.svg';

const Title = styled.p`
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 16px;
  font-weight: 700;
  line-height: 21px;
  margin: 0;
  display: inline-block;
  position: relative;
  bottom: 4px;
`;

const Wrapper = styled.section`
  height: 25px;
  width: 265px;
  border: 1px solid black;
  border-radius: 10px;
  margin: 3px 7px;
  text-align: left;
  padding: 5px 15px 5px 0;
`;

const ResBox = styled.div`
  height: 164px;
  width: 298px;
  border: 1px solid black;
  border-radius: 10px;
`;

const StyledCal = styled.img`
  display: inline-block;
  height: 24px;
  width: 24px;
  margin: 0 12px;
`;

class Reservations extends React.Component {

  componentDidMount() {
    this.fetch(5);
  }

  fetch(id) {
    $.ajax({
      url: `http://localhost:3001/businesses/${id}`,
      success: (response) => {
        this.props.newBusinessSelected(response[0]);
      },
    });
  }


  render() {
    return (
      <ResBox>
        <Wrapper>
          <StyledCal src={img}/>
          <Title>Make a Reservation</Title>
        </Wrapper>
        <CalendarContainer />
        <TimeSlotsContainer />
        <PeoplePerResContainer />
        <FindTableContainer />

        <h5>
          - Current Business is -
          {this.props.business === null ? null : this.props.business.business_name}
        </h5>
      </ResBox>
    );
  }
}

export default Reservations;
