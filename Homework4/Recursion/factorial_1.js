//. Write a recursive function to calculate the factorial of a given positive integer.
//console.log(factorial(5));

function factorial(n) {
  if (n < 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

console.log(factorial(5));
