function factorial(num, memo = new Map()) {
  if (memo.has(num)) {
    return memo.get(num);
  }

  if (num === 0 || num === 1) {
    return 1;
  }

  let result = num * factorial(num - 1, memo);

  memo.set(num, result);
  return result;
}

console.log(factorial(3));
console.log(factorial(5));
