// import { test, describe, expect } from 'jest';
import React from 'react';
import { shallow } from 'enzyme';
import Reservations from '../client/src/components/Reservations';
import Calendar from '../client/src/components/reservation-pieces/calendar';
import FindTable from '../client/src/components/reservation-pieces/findTable';
import PeoplePerRes from '../client/src/components/reservation-pieces/peoplePerRes';
import TimeSlots from '../client/src/components/reservation-pieces/timeSlots';
import CalendarFull from '../client/src/components/reservation-pieces/calendarFull';
import CalendarHead from '../client/src/components/reservation-pieces/calendarHead';
import Days from '../client/src/components/reservation-pieces/calendarView';
import Letters from '../client/src/components/reservation-pieces/dayLetter';

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

  describe('CalendarFull component', () => {
    test('should contain 2 child nodes', () => {
      const wrapper = shallow(<CalendarFull />);
      expect(wrapper.children().length).toEqual(2);
    });
  });

  describe('CalendarHead component', () => {
    const dateText = () => {
      const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
      const month = months[new Date().getMonth()];
      return `${month} ${new Date().getFullYear()}`;
    };

    test('should contain text with current month and year', () => {
      const wrapper = shallow(<CalendarHead month={new Date().getMonth()} year={new Date().getFullYear()} />);
      const text = wrapper.find('StyledText').children().text();
      expect(text).toEqual(dateText());
    });
  });

  describe('CalendarView component', () => {
    const props = {
      month: 8,
      year: 2018,
      daysOut: 90,
      date: new Date('september 15, 2018'),
    };

    test('should return the correct number of weeks', () => {
      const wrapper = shallow(<Days {...props} />);
      const weeks = wrapper.find('StyledView').children().length;
      expect(weeks).toBe(6);
    });

    test('week should contain 7 days', () => {
      const wrapper = shallow(<Days {...props} />);
      const days = wrapper.find('.week0').dive().children().length;
      expect(days).toBe(7);
    });

    test('second day should be in second week', () => {
      const wrapper = shallow(<Days {...props} />);
      const firstDay = wrapper.find('.week1 .day2').dive().text();
      expect(firstDay).toBe('2');
    });
  });

  describe('DayLetter component', () => {
    test('should contain 7 children', () => {
      const wrapper = shallow(<Letters />);
      expect(wrapper.children().length).toEqual(7);
    });
  });
});
