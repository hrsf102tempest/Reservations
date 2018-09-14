import changeDate from '../client/src/actions/CalendarAction';
import changeBusiness from '../client/src/actions/ReservationsAction';
import changeTime from '../client/src/actions/TimeSlotsAction';

describe('Actions', () => {
  describe('CalendarAction', () => {
    test('Should return an object', () => {
      expect(typeof changeDate()).toBe('object');
    });

    test('Should return an object with key "type" and value "NEW_DATE"', () => {
      expect(changeDate().type).toBe('NEW_DATE');
    });

    test('Should return an object with key "month" and value is a date object', () => {
      expect(changeDate(new Date()).month instanceof Date).toBe(true);
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
});
