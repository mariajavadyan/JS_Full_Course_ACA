function validateObject(obj, schema) {
  for (let prop in schema) {
    let schemaProp = schema[prop];
    let objectPropDescriptor = Object.getOwnPropertyDescriptor(obj, prop);

    if (!objectPropDescriptor) {
      return `${prop} is missing from the object.`;
    }

    if (typeof objectPropDescriptor.value !== typeof schemaProp.value) {
      return `${prop} should be of type ${typeof schemaProp.value}.`;
    }

    if (
      schemaProp.validate &&
      !schemaProp.validate(objectPropDescriptor.value)
    ) {
      return `${prop} is not valid.`;
    }
  }

  return "Validation passed !!! ";
}

let schema = {
  name: {
    value: "",
    writable: true,
    validate: (value) => typeof value === "string",
  },
  age: {
    value: 0,
    writable: true,
    validate: (value) => typeof value === "number" && value >= 18,
  },
};

let obj = {
  name: "Anie",
  age: 19,
};
