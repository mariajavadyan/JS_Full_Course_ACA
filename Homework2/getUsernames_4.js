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

function getUserNames(users) {
  let newArr = [];

  users.forEach((obj) => newArr.push(obj.username));
  return newArr;
}

console.log(getUserNames(users));
