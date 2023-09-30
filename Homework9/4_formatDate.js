const formatDate = (date) => {
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let day = new Date(date);
  let newDate =
    day.getDay() + " " + months[day.getMonth()] + " " + day.getFullYear();

  return newDate;
};

formatDate(new Date("2020-05-14"));
