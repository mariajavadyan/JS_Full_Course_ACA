const arr = [1, 22, 55, 166, 5, 366, 11, 205, 333, 95, 62, 10, 43];

function sumOfArr(arr) {
  let sum = 0;
  arr.map((el) => (el >= 18 ? (sum += el) : (sum += 0)));

  return sum;
}

console.log(sumOfArr(arr));
