//9.Write a function which filters object by field.

// filterByField(users, "isAstronaut"); // [{ username: "Yuri Gagarin", lang:
// "ru", isAstronaut: true, }, { username: "Nil Armstrong, lang: "ENG" }]

const users = [
  {
    username: "Yuri Gagarin",
    lang: "ru",
    isAstronaut: true,
  },
  {
    username: "Nil Armstrong",
    lang: "ENG",
    isAstronaut: true,
  },
  {
    username: "Elon Musk",
    isAstronaut: false,
  },
];

let field = "isAstronaut";

function filterByField(users, field) {
  return users.filter((obj) => obj[field] === true);
}

console.log(filterByField(users, field));

//console.log(users[2][field] === true);
