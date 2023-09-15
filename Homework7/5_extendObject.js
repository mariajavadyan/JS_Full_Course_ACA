function extend(obj, propsObj) {
  for (let key in propsObj) {
    let descriptor = propsObj[key];
    if (descriptor.hasOwnProperty("value")) {
      Object.defineProperty(obj, key, { ...descriptor, enumerable: true });
    } else if (
      descriptor.hasOwnProperty("get") ||
      descriptor.hasOwnProperty("set")
    ) {
      Object.defineProperty(obj, key, {
        get: descriptor.get,
        set: descriptor.set,
        enumerable: true,
        configurable: true,
      });
    } else {
      Object.defineProperty(obj, key, descriptor);
    }
  }
}

let myObj = { prop1: "value1" };
extend(myObj, {
  prop2: { value: "value2", writable: false },
  prop3: {
    get() {
      return "computed";
    },
  },
});
