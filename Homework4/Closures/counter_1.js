//1. Create a counter function using closure that increments a count every time it's called.

const increment = function () {
  let i = 0;

  return function nextIncr() {
    i++;
    return i;
  };
};

const counter = increment();

console.log(counter());
console.log(counter());
console.log(counter());
