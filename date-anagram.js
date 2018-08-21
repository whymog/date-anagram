const moment = require('moment');

const year = (process.argv[2] || moment().year());
const yearArray = year.toString().split('');

const months = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
let matches = 0;

months.forEach((month) => {
  const daysInMonth = moment(`${year}-${month}`).daysInMonth();

  const monthArray = month.split('');
  if (yearArray.includes(monthArray[0]) && yearArray.includes(monthArray[1])) {
    for (let i = 1; i <= daysInMonth; i++) {
      const monthDayString = `${month}${i < 10 ? `0${i}` : `${i}`}`;
      let monthDayArray = monthDayString.split('');

      yearArray.forEach((digit) => {
        if (monthDayArray.includes(digit)) {
          monthDayArray.splice(monthDayArray.indexOf(digit), 1);
        }
      });

      if (monthDayArray.length === 0) {
        matches ++;
        console.log(`Match! ${month}-${i < 10 ? `0${i}` : `${i}`}-${year}`);
      }
    }
  }
});

console.log(`In the year ${year}, there are ${matches} anagrammatic month/day combinations.`);
