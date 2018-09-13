import React from 'react';
import { shallow } from 'enzyme';
import Reservations from '../client/src/components/Reservations';
import Calendar from '../client/src/components/reservation-pieces/calendar.jsx';

describe('Components', () => {
  describe('Reservations component', () => {
    test('should contain text "Make a Reservation', () => {
      const wrapper = shallow(<Reservations />);
      const text = wrapper.find('Title').children().text();
      expect(text).toBe('Make a Reservation');
    });
  });

  describe('Calendar component', () => {
    test('should contain text "Make a Reservation', () => {
      const wrapper = shallow(<Calendar date={new Date('september 13, 2018')} />);
      const text = wrapper.find('StyledDate').children().text();
      expect(text).toBe('Thursday, September 13, 2018');
    });
  });
});
