// 8. Implement a currying function using closures

const curry = (fn) => {
  return (curried = (...args) => {
    if (fn.length !== args.length) {
      return curried.bind(null, ...args);
    }
    return fn(...args);
  });
};

const add = function (a, b, c) {
  return a + b + c;
};

const curriedAdd = curry(add);
