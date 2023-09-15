let obj = {
  name: "Anie",
  age: 17,
};

let validationRules = {
  name: {
    value: "Anie",
    writable: false,
    enumerable: true,
    configurable: false,
  },

  age: {
    value: "Anie",
    writable: false,
    enumerable: true,
    configurable: true,
  },
};

function setValidationRules(obj, validationRules) {
  let newObj = { ...obj };
  Object.defineProperties(newObj, validationRules);
  return newObj;
}

let result = setValidationRules(obj, validationRules);
Object.getOwnPropertyDescriptors(result);
