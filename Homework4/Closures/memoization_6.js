//6. Implement a memoization function using closure to cache expensive function calls.

function fibonacci(n) {
  if (n < 2) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}

const memoize = function (callback) {
  let cache = {};
  return function (n) {
    if (cache.hasOwnProperty(n)) {
      return `${cache[n]} (cached)`;
    }
    cache[n] = callback(n);
    return `${cache[n]} (calculated)`;
  };
};

const memoizedFibonacci = memoize(fibonacci);
