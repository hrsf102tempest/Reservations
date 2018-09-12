import React from 'react';
import $ from 'jquery';
import styled from 'styled-components';
import TimeSlotsContainer from '../containers/reservations/TimeSlotsContainer';
import PeoplePerResContainer from '../containers/reservations/PeoplePerResContainer';
import FindTableContainer from '../containers/reservations/FindTableContainer';
import CalendarContainer from '../containers/reservations/CalendarContainer';

const Title = styled.h2`
  margin: 0;
`;

const Wrapper = styled.section`
  height: 25px;
  width: 265px;
  border: 1px solid black;
  border-radius: 10px;
  margin: 3px 7px;
  text-align: right;
  padding: 5px 15px 5px 0;
`;

const ResBox = styled.div`
  height: 164px;
  width: 298px;
  border: 1px solid black;
  border-radius: 10px;
`;

class Reservations extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      business: {
        business_name: 'test',
      }
    }
  }

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
    // console.log(this.props.business.business_name)
    return (
      <ResBox>
        <Wrapper>
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
