//7.Create a function factory that generates functions for different operations.

function createCalculator(operationStr) {
  function addNums(a, b) {
    return a + b;
  }

  function multiplyNums(a, b) {
    return a * b;
  }

  return function (a, b) {
    if (operationStr === "add") {
      return addNums(a, b);
    } else if (operationStr === "multiply") {
      return multiplyNums(a, b);
    } else {
      return "Please provide valid function";
    }
  };
}

const add = createCalculator("add");

const multiply = createCalculator("multiply");
