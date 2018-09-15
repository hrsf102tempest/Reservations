// import { test, describe, expect } from 'jest';
import changeDate from '../client/src/actions/CalendarAction';
import changeBusiness from '../client/src/actions/ReservationsAction';
import changeTime from '../client/src/actions/TimeSlotsAction';
import changeMonthYear from '../client/src/actions/CalendarHeadAction';
import changeViewedDay from '../client/src/actions/CalendarViewAction';

describe('Actions', () => {
  describe('CalendarAction', () => {
    test('Should return an object', () => {
      expect(typeof changeDate()).toBe('object');
    });

    test('Should return an object with key "type" and value "NEW_SHOW"', () => {
      expect(changeDate().type).toBe('NEW_SHOW');
    });

    test('Should return an object with key "showStatus" and value is an object', () => {
      expect(typeof changeDate(new Date()).showStatus).toBe('object');
    });
  });

  describe('ReservationsAction', () => {
    const newBusiness = {
      business_id: 1,
      business_name: 'Test',
    };

    test('Should return an object', () => {
      expect(typeof changeBusiness()).toBe('object');
    });

    test('Should return an object with key "type" and value "NEW_BUSINESS"', () => {
      expect(changeBusiness().type).toBe('NEW_BUSINESS');
    });

    test('Should return an object with key "business" and value an object with an id and name', () => {
      expect(typeof changeBusiness(newBusiness).business.business_id).toBe('number');
      expect(typeof changeBusiness(newBusiness).business.business_name).toBe('string');
    });
  });

  describe('TimeSlotsAction', () => {
    test('Should return an object', () => {
      expect(typeof changeTime()).toBe('object');
    });

    test('Should return an object with key "type" and value "NEW_TIME"', () => {
      expect(changeTime(1130).type).toBe('NEW_TIME');
    });

    test('Should return an object with key "time" and value is number', () => {
      expect(typeof changeTime(1130).time).toBe('number');
    });
  });

  describe('CalendarHead Action', () => {
    test('Should return an object', () => {
      expect(typeof changeMonthYear(8, 2018)).toBe('object');
    });

    test('Should return an object with key "type" and value "NEW_MONTH_YEAR"', () => {
      expect(changeMonthYear(8, 2018).type).toBe('NEW_MONTH_YEAR');
    });

    test('Should return an object with key "month" and value is number', () => {
      expect(changeMonthYear(8, 2018).month).toBe(8);
    });

    test('Should return an object with key "year" and value is number', () => {
      expect(changeMonthYear(8, 2018).year).toBe(2018);
    });
  });

  describe('CalendarView Action', () => {
    test('Should return an object', () => {
      expect(typeof changeViewedDay()).toBe('object');
    });

    test('Should return an object with key "type" and value "NEW_VIEWED_DAY"', () => {
      expect(changeViewedDay(7).type).toBe('NEW_VIEWED_DAY');
    });

    test('Should return an object with key "day" and value is number', () => {
      expect(changeViewedDay(7).date).toBe(7);
    });
  });
});
