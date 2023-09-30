const getWeekOfMonth = (date) => {
  function getDayOfWeek(date) {
    let weekDays = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    let date1 = new Date(date);

    let index = date1.getDay();

    return weekDays[index];
  }

  let year = date.getFullYear();
  let month = date.getMonth();
  let day = date.getDate();

  let firstSunday = 0;

  for (let i = 1; i <= day; i++) {
    if (getDayOfWeek(`${year}-${month + 1}-${i}`) === "Sunday") {
      firstSunday = i;
      break;
    }
  }

  let week = 0;
  let currentSunday = firstSunday;

  if (firstSunday > 0 && firstSunday < 7) {
    week += 1;
  }

  while (currentSunday < day) {
    week += 1;
    currentSunday += 7;
  }

  return week;
};

let result = getWeekOfMonth(new Date(2017, 10, 9));
