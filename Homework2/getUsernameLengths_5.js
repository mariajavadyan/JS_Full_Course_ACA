const users = [
  {
    username: "Yuri Gagarin",
    lang: "ru",
  },
  {
    username: "Nil Armstrong",
    lang: "ENG",
  },
];

function getUsernameLengths(users) {
  let newArr = [];
  let secondArr = [];

  users.forEach((obj) => newArr.push(obj.username));

  newArr.forEach((el) => secondArr.push(el.length));

  return secondArr;
}

console.log(getUsernameLengths(users));
