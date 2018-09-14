// import { test, describe, expect } from 'jest';
import React from 'react';
import { shallow } from 'enzyme';
import store from '../client/src/store/store';
import ReservationsContainer from '../client/src/containers/reservations/ReservationsContainer';
import CalendarContainer from '../client/src/containers/reservations/CalendarContainer';
import TimeSlotsContainer from '../client/src/containers/reservations/TimeSlotsContainer';
import PeoplePerResContainer from '../client/src/containers/reservations/PeoplePerResContainer';

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

    test('props should have a method named "newDate"', () => {
      const wrapper = shallow(<CalendarContainer store={store} />);
      expect(typeof wrapper.props().newDate).toBe('function');
    });

    test('props should have a key "business" that is initially "null"', () => {
      const wrapper = shallow(<CalendarContainer store={store} />);
      expect(wrapper.props().business).toBe(null);
    });

    test('props should have a key "date" that is a Date object', () => {
      const wrapper = shallow(<CalendarContainer store={store} />);
      expect(wrapper.props().date instanceof Date).toBe(true);
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

    test('props should have a key "date" that is a Date object', () => {
      const wrapper = shallow(<TimeSlotsContainer store={store} />);
      expect(wrapper.props().time).toBe(undefined);
    });
  });

  describe('PeoplePerRes Container', () => {
    test('should have defined props', () => {
      const wrapper = shallow(<PeoplePerResContainer store={store} />);
      expect(wrapper.props()).not.toEqual(undefined);
    });

    test('props should have a key "business" that is initially "null"', () => {
      const wrapper = shallow(<PeoplePerResContainer store={store} />);
      expect(wrapper.props().maxPeople).toBe(0);
    });
  });
});
