function threeDaysAgo(date) {
  let threeDaysInMilli = 3 * 24 * 60 * 60 * 1000;

  let threeDaysAgoDate = new Date(date.getTime() - threeDaysInMilli);

  let formattedDate = `${threeDaysAgoDate.getFullYear()}-${(
    threeDaysAgoDate.getMonth() + 1
  )
    .toString()
    .padStart(2, "0")}-${threeDaysAgoDate
    .getDate()
    .toString()
    .padStart(2, "0")}`;

  return `"${formattedDate}"`;
}
