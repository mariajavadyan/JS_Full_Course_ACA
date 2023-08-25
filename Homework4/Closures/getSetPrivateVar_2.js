//2. Implement a function that returns an object with methods to get and set a private variable.

let privateVariable = function () {
  let _num = 42;

  return {
    get() {
      return _num;
    },

    set(n) {
      _num = n;
    },
  };
};

const secretValue = privateVariable(42);
console.log(secretValue.get());
secretValue.set(100);
console.log(secretValue.get());
