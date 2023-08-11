// 5.Write a function which returns array of lengths of user names

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
  let secondArr = [];

  users.forEach((obj) => newArr.push(obj.username));

  newArr.forEach((el) => secondArr.push(el.length));

  return secondArr;
}

console.log(getUserNames(users));
