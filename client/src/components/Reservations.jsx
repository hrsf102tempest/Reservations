import React from 'react';

class Reservations extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <h2>Make a Reservation</h2>
        <div id="Calendar">
          <h1>This area is for the calendar block</h1>
        </div>
        <div id="timeSlots">
          <h1>This area is for the timeSlots block</h1>
        </div>
        <div id="peoplePerRes">
          <h1>This area is for the peoplePerRes block</h1>
        </div>
        <div id="findTable">
          <h1>This area is for the findTable block</h1>
        </div>
      </div>
    );
  }
}

export default Reservations;
