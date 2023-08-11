//11. Write a function which calculates average age of users

const users = [
  {
    username: "Yuri Gagarin",
    lang: "ru",
    age: 56,
  },
  {
    username: "Nil Armstrong",
    lang: "ENG",
    age: 54,
  },
];

function getAverageAge(users) {
  let sum = 0;

  users.map((obj) => (sum += obj.age));

  return sum / users.length;
}

console.log(getAverageAge(users));
