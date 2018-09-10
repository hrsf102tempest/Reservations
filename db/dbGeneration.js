const names = require('./businessNames.js');
const save = require('./app');

const randomInt = (max, min = 0) => (
  Math.random() * (max - min) + min
);

const allowReservations = () => {
  const rand = randomInt(5);
  if (rand < 3) {
    return true;
  }
  return false;
};

const daysInAdvance = () => {
  const monthsOut = randomInt(6);
  return monthsOut * 30;
};

const reservationsPerTime = () => (
  randomInt(13, 5)
);

const hours = () => {
  const firstOpenTimes = [900, 1000, 1030, 1100, 1130];
  const secondOpenTimes = [1430, 1500, 1530, 1600, 1630];
  const firstCloseTimes = [2100, 2130, 2200, 2230, 2300];
  const secondCloseTimes = [1230, 1300, 1330, 1530, 1600];

  const openSlots = randomInt(4);
  if (openSlots < 3) {
    return `${firstOpenTimes(randomInt(5))}-${firstCloseTimes(randomInt(5))}`;
  }
  return `${firstOpenTimes(randomInt(5))}-${secondCloseTimes(randomInt(5))}-${secondOpenTimes(randomInt(5))}-${firstCloseTimes(randomInt(5))}`;
};

const reservationTime = (businessHours, day) => {
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const dayHours = businessHours[days[day]].split('-');
  let window;
  const firstOrSecond = randomInt(2);
  if (dayHours.length === 2 || firstOrSecond === 0) {
    window = (Number(dayHours[1]) - Number(dayHours[0])) / 100 * 2;
    return Number(dayHours[0]) + randomInt(window) * 30;
  }
  window = (Number(dayHours[3]) - Number(dayHours[2])) / 100 * 2;
  return Number(dayHours[0]) + randomInt(window) * 30;
};

const returnDate = (date, x) => {
  let year = date.getFullYear();
  let month = date.getMonth();
  let day = date.getDate() + x;
  while (day > 30) {
    day -= 30;
    month += 1;
  }
  while (month > 12) {
    month -= 12;
    year += 1;
  }

  return new Date(year, month, day);
};

const formattedDate = date => `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;

const populateReservations = (allowRes, daysInAdv, businessHours, reservationsPerSlot) => {
  const results = {};
  if (!allowRes) {
    return results;
  }
  const date = new Date();
  const day = date.getDate();
  let daysOut = 0;

  while (daysOut < daysInAdv) {
    const time = reservationTime(businessHours, returnDate(day, daysOut).getDay());
    const reservations = randomInt(reservationsPerSlot);
    results[formattedDate][time] = reservations;
    daysOut += 1;
  }

  return results;
};

const entries = [];
names.forEach((business) => {
  const allowRes = allowReservations();
  const daysInAdv = allowRes === true ? daysInAdvance() : 0;
  const resPerSlot = allowRes === true ? reservationsPerTime() : 0;
  const businessHours = {
    Sunday: hours(),
    Monday: hours(),
    Tuesday: hours(),
    Wednesday: hours(),
    Thursday: hours(),
    Friday: hours(),
    Saturday: hours(),
  };
  const entry = {
    business_id: business[0],
    business_name: business[1],
    allow_reservations: allowRes,
    days_in_advance: daysInAdv,
    reservations_per_time: resPerSlot,
    hours: businessHours,
    current_reservations: populateReservations(allowRes, daysInAdv, businessHours, resPerSlot),
  };
  // add reservations
  entries.push(entry);
  // add entries to database
});

save(entries);
