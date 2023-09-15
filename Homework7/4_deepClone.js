let person = { personName: "Anie", age: 17, phone: 12345 };

function deepClone(person) {
  Object.defineProperties(person, {
    personName: { configurable: false },
    age: { writable: false },
    phone: { writable: false },
  });

  let clonedObj = {};
  for (let key in person) {
    clonedObj[key] = person[key];
    Object.defineProperty(
      clonedObj,
      key,
      Object.getOwnPropertyDescriptor(person, key)
    );
  }

  return clonedObj;
}
