const person = {
  name: "Maria",
};

function info(phone, email) {
  console.log(`Name: ${this.name}, Phone: ${phone}, Email: ${email}`);
}

function bind(fn, contextObj, ...rest) {
  return function (...args) {
    let uniqeId = Date.now().toString() + Math.random();
    contextObj[uniqeId] = fn;
    let result = contextObj[uniqeId](...rest.concat(args));

    delete contextObj[uniqeId];

    return result;
  };
}

bind(info, person)("12345", "maria@gmail.com");
bind(info, person, "12345")("maria@gmail.com");
bind(info, person, "12345", "maria@gmail.com");
