function dayOfYear(date) {
  let date1 = new Date(date);

  let previousYear = date1.getFullYear() - 1;

  let startday = `'12/31/${previousYear}'`;

  let date2 = new Date(startday);

  let diff = date1.getTime() - date2.getTime();

  let totalSeconds = parseInt(Math.floor(diff / 1000));
  let totalMinutes = parseInt(Math.floor(totalSeconds / 60));
  let totalHours = parseInt(Math.floor(totalMinutes / 60));
  days = parseInt(Math.floor(totalHours / 24));

  return days;
}
