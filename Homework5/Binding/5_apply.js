const person = {
  name: "Maria",
};

function info(phone, email) {
  console.log(`Name: ${this.name}, Phone: ${phone}, Email: ${email}`);
}

function apply(fn, contextObj, args) {
  let uniqeId = Date.now().toString() + Math.random();
  contextObj[uniqeId] = fn;
  let result = contextObj[uniqeId](...args);

  delete contextObj[uniqeId];

  return result;
}

apply(info, person, ["12345", "maria@gmail.com"]);
