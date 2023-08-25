//3. Write a function that caches the duplication of result of a calculation using closure.

const createCachingFunction = function () {
  let obj = {};
  return function (num) {
    let res = num * 2;
    if (!(res in obj)) {
      obj[res] = res;
      return `${res}, (calculated)`;
    } else {
      return `${res}, (cached)`;
    }
  };
};

const cachedCalculation = createCachingFunction();
