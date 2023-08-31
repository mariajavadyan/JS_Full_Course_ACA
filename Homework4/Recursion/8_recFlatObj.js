function flattenObject(obj, parent) {
  let finalObj = {};
  const generateFlatObject = (obj, parent) => {
    for (let key in obj) {
      let newParent = parent + key;
      let value = obj[key];
      if (typeof value === "object") {
        generateFlatObject(value, newParent + ".");
      } else {
        newParent += "";
        finalObj[newParent] = value;
      }
    }
  };
  generateFlatObject(obj, parent);
  return finalObj;
}

let obj = {
  a: 1,
  b: {
    c: 2,
    d: {
      e: 3,
      f: 4,
    },
  },
  g: 5,
};

let flattenedObject = flattenObject(obj, "");
