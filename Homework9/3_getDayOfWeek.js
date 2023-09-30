function getDayOfWeek(date) {
  let weeakDays = [
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

  return weeakDays[index];
}

getDayOfWeek("12/07/2016");
getDayOfWeek("09/04/2016");
getDayOfWeek("12/08/2011");
