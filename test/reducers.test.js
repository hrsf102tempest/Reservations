import { test, describe, expect } from 'jest';
import CalendarReducer from '../client/src/reducers/CalendarReducer';
import ReservationsReducer from '../client/src/reducers/ReservationsReducer';
import { TimeSlotsReducer, findTime, init } from '../client/src/reducers/TimeSlotsReducer';

describe('Reducers', () => {
  const initialState = {
    date: new Date(),
  };

  const dummyAction = {
    type: 'NOT_RIGHT',
  };

  describe('ReservationsReducer', () => {
    const reservationAction = {
      type: 'NEW_BUSINESS',
      business: { business: 1 },
    };

    test('initial state should be null', () => {
      expect(ReservationsReducer(undefined, dummyAction)).toBe(null);
    });

    test('should return an object with key "business"', () => {
      expect(ReservationsReducer(undefined, reservationAction).business).toBe(1);
    });
  });

  describe('CalendarReducer', () => {
    const calendarAction = {
      type: 'NEW_DATE',
      date: { date: new Date() },
    };

    test('initial state should have a key "key" date with a Date object', () => {
      expect(CalendarReducer(undefined, dummyAction).date instanceof Date).toBe(true);
    });

    test('should return an object with "date" key that is a date object', () => {
      expect(CalendarReducer(initialState, calendarAction).date instanceof Date).toBe(true);
    });
  });

  describe('TimeSlotsReducer', () => {
    test('findTime should return a number', () => {
      expect(findTime(new Date('september 1, 2018 11:00'), dummyAction)).toBe(1130);
    });

    test('initial state should have a key "time" with a number', () => {
      expect(typeof ReservationsReducer(init, dummyAction).time).toBe('number');
    });

    test('initial state should have a key "day" with a integer', () => {
      expect(typeof TimeSlotsReducer(init, dummyAction).day).toBe('number');
    });
  });
});
