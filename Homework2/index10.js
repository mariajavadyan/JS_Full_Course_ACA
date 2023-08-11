//9.Given an array, return the sum of numbers that are 18 or over.

// 22 + 55 + 166 + 366 + 205 + 333 + 95 + 62 + 43 = 1347

const arr = [1, 22, 55, 166, 5, 366, 11, 205, 333, 95, 62, 10, 43];

function sumOfArr(arr) {
  let sum = 0;
  arr.map((el) => (el >= 18 ? (sum += el) : (sum += 0)));

  return sum;
}

console.log(sumOfArr(arr));
