let properties = { first: "Hello", second: "ByeBye" };

function ImmutableObj(properties) {
  this.obj = { ...properties };

  Object.freeze(this.obj);

  for (let key in this.obj) {
    Object.defineProperty(this, key, {
      set: () => {
        throw new Error(
          "Properties of this object are immutable and cannot be modified."
        );
      },
    });
  }

  this.toString = function () {
    return JSON.stringify(this.obj);
  };
}
let newObj = new ImmutableObj(properties);

console.log(newObj.toString());

try {
  newObj.first = "NewValue";
} catch (error) {
  console.error(error.message);
}
