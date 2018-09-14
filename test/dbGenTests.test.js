const generator = require('../db/dbGeneration');

describe('Data Generation', () => {
  describe('RandomInt', () => {
    // randomInt test
    const range = [2, 5, 10, 12, 25];

    range.forEach((max) => {
      test(`should return a number between 0 and ${max}, not including ${max}`, () => {
        const results = [];
        for (let i = 1; i < max; i += 1) {
          results.push(generator.randomInt(max));
        }
        expect(results.every(value => value < max)).toBe(true);
      });
    });

    test('Hours should be formatted as a string', () => {
      expect(typeof generator.hours()).toBe('string');
    });
  });

  const hoursOpen = {
    Sunday: generator.hours(),
    Monday: generator.hours(),
    Tuesday: generator.hours(),
    Wednesday: generator.hours(),
    Thursday: generator.hours(),
    Friday: generator.hours(),
    Saturday: generator.hours(),
  };

  describe('Allow Reservations', () => {
  // test allow reservations
    test('Allow Reservations should be a boolean', () => {
      expect(typeof generator.allowReservations()).toBe('boolean');
    });

    test('Allow Reservations should be true when value is 2', () => {
      expect(generator.allowReservations(2)).toBe(true);
    });

    test('Allow Reservations should be false when value is 4', () => {
      expect(generator.allowReservations()).toBe(false);
    });
  });

  describe('Days in Advance', () => {
    // test day's in advance
    test('Day\'s in advance should be a multiple of 30', () => {
      expect(generator.daysInAdvance() % 30).toBe(0);
    });
  });

  describe('Reservation Time', () => {
    // test reservations time
    for (let i = 0; i < 7; i += 1) {
      const day = Object.keys(hoursOpen)[i];
      const times = hoursOpen[day].split('-');
      const resTime = generator.reservationTime(hoursOpen, i);

      const open = times[0];
      const close = times[times.length - 1];
      test(`reservationTime should return a number between ${open} and ${close}`, () => {
        expect(typeof resTime).toBe('number');
        expect(Number(resTime) <= Number(close)).toBe(true);
        expect(Number(resTime) >= Number(open)).toBe(true);
        if (resTime.length > 2) {
          test(`but not between ${resTime[2]} and ${resTime[1]}`, () => {
            expect(Number(resTime) <= Number(resTime[1]) && Number(resTime) >= Number(resTime[2])).toBe(false);
          });
        }
      });
    }
  });

  describe('Return Date', () => {
    // test return date
    test('return date should return a date', () => {
      const date = generator.returnDate(new Date('September 17, 2018'), 5);
      expect(date instanceof Date).toBe(true);
    });
  });

  describe('Format Date', () => {
    // test formatDate
    test('format date should return a formatted string', () => {
      expect(generator.formatDate(new Date('september 17, 2018'))).toBe('2018-8-17');
    });
  });

  describe('Populate Reservations', () => {
    // test populate reservations
    test('populateReservations should return an object', () => {
      expect(typeof generator.populateReservations(true, 30, hoursOpen, 3)).toBe('object');
    });

    test('populateReservations should return an empty object if allow reservations is false', () => {
      expect(Object.keys(generator.populateReservations(false, 30, hoursOpen, 3)).length).toBe(0);
    });

    test('populateReservations should return an object full of objects', () => {
      const reservations = generator.populateReservations(false, 30, hoursOpen, 3);
      const keys = Object.keys(reservations);
      expect(keys.every(key => typeof reservations[key] === 'object')).toBe(true);
    });
  });

  describe('Test Compiled Entries', () => {
    // test the compiled entries array
    test('entries should be an array', () => {
      expect(Array.isArray(generator.entries)).toBe(true);
    });

    test('entries should have 150 object elements', () => {
      expect(generator.entries.length).toBe(150);
      expect(generator.entries.every(ele => typeof ele === 'object')).toBe(true);
    });

    const isEmptyObject = (obj) => {
      const keys = Object.keys(obj);
      return keys.length === 0;
    };

    test('all elements where "allows_reservations" is false should have an empty object for current_res', () => {
      expect(generator.entries.every((ele) => {
        if (!ele.allow_reservations) {
          return isEmptyObject(ele.current_reservations);
        }
        return true;
      })).toBe(true);
    });
  });
});
