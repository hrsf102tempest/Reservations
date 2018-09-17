import React from 'react';
import styled from 'styled-components';
// import CalendarHead from './calendarHead.jsx';
import CalendarHeadContainer from '../../containers/reservations/CalendarHeadContainer';
import CalendarViewContainer from '../../containers/reservations/CalendarViewContainer';
// import Days from './calendarView.jsx';

const StyledCalendar = styled.div`
  border: 1px solid rgb(204, 204, 204);
  border-radius: 5px;
  width: 272px;
`;

StyledCalendar.displayName = 'StyledCalendar';

StyledCalendar.displayName = 'StyledCalendar';

class CalendarFull extends React.Component {
  constructor(props) {
    super(props);

    this.setWrapperRef = this.setWrapperRef.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  componentDidMount() {
    this.setWrapperRef();
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  setWrapperRef(node) {
    this.wrapperRef = document.getElementsByClassName('Calendar')[0];
  }

  handleClickOutside(event) {
    console.log('HIT', this.wrapperRef);
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      console.log('clicked!')
    }
  }

  handleBodyClick() {
    // if calendar is shown, set state of showCalendar to false
    const { hideCalendar, showCalendar, } = this.props;
    if (showCalendar) {
      console.log('HIT');
      hideCalendar();
    }
  }

  render() {
    return (
      <StyledCalendar className="Calendar">
        <CalendarHeadContainer />
        <CalendarViewContainer />
      </StyledCalendar>
    );
  }
}

export default CalendarFull;


// export default class OutsideAlerter extends Component {
//   constructor(props) {
//     super(props);

//     this.setWrapperRef = this.setWrapperRef.bind(this);
//     this.handleClickOutside = this.handleClickOutside.bind(this);
//   }

  // componentDidMount() {
  //   document.addEventListener('mousedown', this.handleClickOutside);
  // }

//   componentWillUnmount() {
//     document.removeEventListener('mousedown', this.handleClickOutside);
//   }

//   /**
//    * Set the wrapper ref
//    */
//   setWrapperRef(node) {
//     this.wrapperRef = node;
//   }

//   /**
//    * Alert if clicked on outside of element
//    */
//   handleClickOutside(event) {
//     if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
//       alert('You clicked outside of me!');
//     }
//   }
