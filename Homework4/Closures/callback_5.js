//5.Write a function that received callback and set of arguments and calculate the result via callback
//using closure.

function partial(add, num) {
  return function (...addArgs) {
    let allArgs = [...addArgs, num];
    return add(...allArgs);
  };
}
function add(a, b, c) {
  return a + b + c;
}
const add5 = partial(add, 5);
add5(10, 20);
