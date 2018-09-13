import React from 'react';
import { shallow } from 'enzyme';
import Reservations from '../client/src/components/Reservations';
import Calendar from '../client/src/components/reservation-pieces/calendar.jsx';
import FindTable from '../client/src/components/reservation-pieces/findTable.jsx';
import PeoplePerRes from '../client/src/components/reservation-pieces/peoplePerRes.jsx';
import TimeSlots from '../client/src/components/reservation-pieces/timeSlots.jsx';

describe('Components', () => {
  describe('Reservations component', () => {
    test('should contain text "Make a Reservation"', () => {
      const wrapper = shallow(<Reservations />);
      const text = wrapper.find('Title').children().text();
      expect(text).toBe('Make a Reservation');
    });
  });

  describe('Calendar component', () => {
    test('should contain a correctly formatted Date', () => {
      const wrapper = shallow(<Calendar date={new Date('september 13, 2018')} />);
      const text = wrapper.find('StyledDate').children().text();
      expect(text).toBe('Thursday, September 13, 2018');
    });
  });

  describe('FindTable component', () => {
    test('should contain text "Find a Table"', () => {
      const wrapper = shallow(<FindTable />);
      const text = wrapper.find('StyledFind').children().text();
      expect(text).toBe('Find a Table');
    });
  });

  describe('PeoplePerRes component', () => {
    test('first option should contain text "1 person"', () => {
      const wrapper = shallow(<PeoplePerRes maxPeople={1} />);
      const text = wrapper.find('SelectWrapper').children().text();
      expect(text).toBe('1 person');
    });

    test('should contain 4 options', () => {
      const wrapper = shallow(<PeoplePerRes maxPeople={4} />);
      const text = wrapper.find('SelectWrapper').children().length;
      expect(text).toBe(4);
    });
  });

  describe('TimeSlots component', () => {
    const hours = {
      Thursday: '1100-2200',
    };

    test('should return a list with the correct number of options', () => {
      const wrapper = shallow(<TimeSlots date={new Date('september 13, 2018')} hours={hours} />);
      const text = wrapper.find('SelectWrapper').children().length;
      expect(text).toBe(20);
    });

    test('should return a list with the correct number of options', () => {
      const wrapper = shallow(<TimeSlots date={new Date('september 13, 2018')} hours={hours} />);
      const text = wrapper.find('SelectWrapper').childAt(0).text();
      expect(text).toBe('11:00 am');
    });
  });
});
