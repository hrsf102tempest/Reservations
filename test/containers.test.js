// import { test, describe, expect } from 'jest';
import React from 'react';
import { shallow } from 'enzyme';
// import configureStore from 'redux-mock-store';
import store from '../client/src/store/store';
import ReservationsContainer from '../client/src/containers/reservations/ReservationsContainer';
import CalendarContainer from '../client/src/containers/reservations/CalendarContainer';
import TimeSlotsContainer from '../client/src/containers/reservations/TimeSlotsContainer';
import PeoplePerResContainer from '../client/src/containers/reservations/PeoplePerResContainer';
import CalendarHeadContainer from '../client/src/containers/reservations/CalendarHeadContainer';
import CalendarViewContainer from '../client/src/containers/reservations/CalendarViewContainer';

describe('Containers', () => {
  describe('Reservations Container', () => {
    test('should have defined props', () => {
      const wrapper = shallow(<ReservationsContainer store={store} />);
      expect(wrapper.props()).not.toEqual(undefined);
    });

    test('props should have a method named "newBusinessSelected"', () => {
      const wrapper = shallow(<ReservationsContainer store={store} />);
      expect(typeof wrapper.props().newBusinessSelected).toBe('function');
    });

    test('props should have a key "business" that is initially "null"', () => {
      const wrapper = shallow(<ReservationsContainer store={store} />);
      expect(wrapper.props().business).toBe(null);
    });
  });

  describe('Calendar Container', () => {
    test('should have defined props', () => {
      const wrapper = shallow(<CalendarContainer store={store} />);
      expect(wrapper.props()).not.toEqual(undefined);
    });

    test('props should have a method named "newStatus"', () => {
      const wrapper = shallow(<CalendarContainer store={store} />);
      expect(typeof wrapper.props().newStatus).toBe('function');
    });

    test('props should have a key "showCalendar" that is a boolean', () => {
      const wrapper = shallow(<CalendarContainer store={store} />);
      expect(typeof wrapper.props().showCalendar).toBe('boolean');
    });
  });

  describe('TimeSlots Container', () => {
    test('should have defined props', () => {
      const wrapper = shallow(<TimeSlotsContainer store={store} />);
      expect(wrapper.props()).not.toEqual(undefined);
    });

    test('props should have a method named "newTime"', () => {
      const wrapper = shallow(<TimeSlotsContainer store={store} />);
      expect(typeof wrapper.props().newTime).toBe('function');
    });

    test('props should have a key "business" that is initially "null"', () => {
      const wrapper = shallow(<TimeSlotsContainer store={store} />);
      expect(wrapper.props().hours).toBe(null);
    });

    test('props should have a key "date" that is a Date object', () => {
      const wrapper = shallow(<TimeSlotsContainer store={store} />);
      expect(wrapper.props().date instanceof Date).toBe(true);
    });

    test('props should have a key "time" that contains a day and time', () => {
      const wrapper = shallow(<TimeSlotsContainer store={store} />);
      expect(wrapper.props().time.day).not.toBe(undefined);
      expect(wrapper.props().time.time).not.toBe(undefined);
    });
  });

  describe('PeoplePerRes Container', () => {
    test('should have defined props', () => {
      const wrapper = shallow(<PeoplePerResContainer store={store} />);
      expect(wrapper.props()).not.toEqual(undefined);
    });

    test('props should have a key "maxPeople" that is initially "0"', () => {
      const wrapper = shallow(<PeoplePerResContainer store={store} />);
      expect(wrapper.props().maxPeople).toBe(0);
    });
  });

  describe('CalendarHead Container', () => {
    test('should have defined props', () => {
      const wrapper = shallow(<CalendarHeadContainer store={store} />);
      expect(wrapper.props()).not.toEqual(undefined);
    });

    test(`props should have a key "month" that is initially ${new Date().getMonth()}`, () => {
      const wrapper = shallow(<CalendarHeadContainer store={store} />);
      expect(wrapper.props().month).toBe(new Date().getMonth());
    });

    test(`props should have a key "year" that is initially ${new Date().getFullYear()}`, () => {
      const wrapper = shallow(<CalendarHeadContainer store={store} />);
      expect(wrapper.props().year).toBe(new Date().getFullYear());
    });
  });

  describe('CalendarView Container', () => {
    test('should have defined props', () => {
      const wrapper = shallow(<CalendarViewContainer store={store} />);
      expect(wrapper.props()).not.toEqual(undefined);
    });

    test('props should have a key "daysOut" that is initially "0"', () => {
      const wrapper = shallow(<CalendarViewContainer store={store} />);
      expect(wrapper.props().daysOut).toBe(0);
    });

    test('props should have a key "showCalendar" that is initially "false"', () => {
      const wrapper = shallow(<CalendarViewContainer store={store} />);
      expect(wrapper.props().showCalendar).toBe(false);
    });
  });
});
