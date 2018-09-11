import React from 'react';
import $ from 'jquery';
import TimeSlots from './reservation-pieces/timeSlots.jsx';
import PeoplePerRes from './reservation-pieces/peoplePerRes.jsx';
import FindTable from './reservation-pieces/findTable.jsx';
import Calendar from './reservation-pieces/calendar.jsx';


class Reservations extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      business: {
      },
    };
  }

  componentDidMount() {
    // const { business } = this.state;
    // const { id } = business;
    // console.log(id);
    this.fetch(5);
  }

  fetch(id) {
    $.ajax({
      url: `http://localhost:3001/businesses/${id}`,
      success: (response) => {
        console.log(response);
        this.setState({
          business: response,
        });
      },
    });
  }


  render() {
    return (
      <div>
        <h2>Make a Reservation</h2>
        <div id="Calendar">
          <Calendar />
        </div>
        <div id="timeSlots">
          <TimeSlots />
        </div>
        <div id="peoplePerRes">
          <PeoplePerRes />
        </div>
        <div id="findTable">
          <FindTable />
        </div>
      </div>
    );
  }
}

export default Reservations;
