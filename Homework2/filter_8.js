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

function filter(users) {
  return users.filter((obj) => obj.lang !== "ru");
}

console.log(filter(users));
