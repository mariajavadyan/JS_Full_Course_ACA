let months = [
  "january",
  "february",
  "march",
  "april",
  "may",
  "june",
  "july",
  "august",
  "september",
  "october",
  "november",
  "december",
];

function monthsInterval(dateStart, dateEnd) {
  let monthesArr = [];

  let startMonth = dateStart.getMonth();
  let endMonth = dateEnd.getMonth();
  let startYear = dateStart.getFullYear();
  let endYear = dateEnd.getFullYear();

  if (startYear === endYear) {
    for (let i = startMonth; i <= endMonth; i++) {
      monthesArr.push(months[i]);
    }
  } else if (startYear < endYear) {
    for (let i = startMonth; i < months.length; i++) {
      monthesArr.push(months[i]);
    }
    for (let i = 0; i <= endMonth; i++) {
      monthesArr.push(months[i]);
    }
  } else {
    for (let i = startMonth; i >= endMonth; i--) {
      monthesArr.push(months[i]);
    }
  }

  let monthMap = {
    january: 1,
    february: 2,
    march: 3,
    april: 4,
    may: 5,
    june: 6,
    july: 7,
    august: 8,
    september: 9,
    october: 10,
    november: 11,
    december: 12,
  };

  monthesArr.sort((a, b) => monthMap[a] - monthMap[b]);

  return [...new Set(monthesArr)];
}

let december = new Date(2017, 11, 1);
let january = new Date(2018, 0, 1);
monthsInterval(december, january);
