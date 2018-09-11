const generator = require('../db/dbGeneration');

// test('adds 1 + 2 to equal 3', () => {
//   expect(sum(1, 2)).toBe(3);
// });

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

const hoursOpen = {
  Sunday: generator.hours(),
  Monday: generator.hours(),
  Tuesday: generator.hours(),
  Wednesday: generator.hours(),
  Thursday: generator.hours(),
  Friday: generator.hours(),
  Saturday: generator.hours(),
};

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
