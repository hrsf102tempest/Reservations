import React from 'react';
import $ from 'jquery';
import TimeSlotsContainer from '../containers/reservations/TimeSlotsContainer';
import PeoplePerResContainer from '../containers/reservations/PeoplePerResContainer';
import FindTableContainer from '../containers/reservations/FindTableContainer';
import CalendarContainer from '../containers/reservations/CalendarContainer';


class Reservations extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      business: {
        business_name: 'test'
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
      <div>
        <h2>Make a Reservation</h2>
        <h5>
          Current Business is -
          { this.props.business === null ? null : this.props.business.business_name }
        </h5>
        <div id="Calendar">
          <CalendarContainer />
        </div>
        <div id="timeSlots">
          <TimeSlotsContainer />
        </div>
        <div id="peoplePerRes">
          <PeoplePerResContainer />
        </div>
        <div id="findTable">
          <FindTableContainer />
        </div>
      </div>
    );
  }
}

export default Reservations;
