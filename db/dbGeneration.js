const names = require('./businessNames.js');
const { seed } = require('./app');

const randomInt = (max, min = 0) => (
  Math.floor(Math.random() * (max - min)) + min
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
    return `${firstOpenTimes[randomInt(5)]}-${firstCloseTimes[randomInt(5)]}`;
  }
  return `${firstOpenTimes[randomInt(5)]}-${secondCloseTimes[randomInt(5)]}-${secondOpenTimes[randomInt(5)]}-${firstCloseTimes[randomInt(5)]}`;
};

const timeConvert = (num) => {
  if (num % 100 === 30) {
    const newNum = num + 20;
    return newNum;
  }
  return num;
};

const reservationTime = (businessHours, day) => {
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const dayHours = businessHours[days[day]].split('-');
  let window;
  let time;
  const firstOrSecond = randomInt(2);
  if (dayHours.length === 2 || firstOrSecond === 0) {
    window = (timeConvert(Number(dayHours[1])) - timeConvert(Number(dayHours[0]))) / 100 * 2;
    time = Number(dayHours[0]) + randomInt(window) * 50;
  } else {
    window = (timeConvert(Number(dayHours[3])) - timeConvert(Number(dayHours[2]))) / 100 * 2;
    time = Number(dayHours[0]) + randomInt(window) * 50;
  }

  if (time % 100 !== 0 && time % 100 !== 30) {
    return Math.floor(time / 100) * 100;
  }
  return time;
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

const formatDate = date => `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;

const populateReservations = (allowRes, daysInAdv, businessHours, reservationsPerSlot) => {
  const results = {};
  if (!allowRes) {
    return results;
  }
  const date = new Date();

  let daysOut = 0;

  while (daysOut < daysInAdv) {
    const resDate = returnDate(date, daysOut);
    const time = reservationTime(businessHours, resDate.getDay());
    const reservations = randomInt(reservationsPerSlot);
    if (results[formatDate(resDate)]) {
      results[formatDate(resDate)][time.toString()] = reservations;
    } else {
      results[formatDate(resDate)] = {};
      results[formatDate(resDate)][time] = reservations;
    }
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
    business_id: business.id,
    business_name: business.name,
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

seed(entries);
