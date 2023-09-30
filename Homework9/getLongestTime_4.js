function longestTime(h, m, s) {
  let hourMili = h * 3600000;
  let minMili = m * 60000;
  let secMili = s * 1000;

  let max = Math.max(hourMili, minMili, secMili);

  if (max === hourMili) {
    return h;
  } else if (max === minMili) {
    return m;
  } else {
    return s;
  }
}

longestTime(1, 59, 3598);
longestTime(2, 300, 15000);
longestTime(15, 955, 59400);
