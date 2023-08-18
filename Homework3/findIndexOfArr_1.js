// Տրված է թվերի մատրիցա(զանվածների երկարթույնը կարող է տարբեր լինել) գտնել
// ամենամեծ գումարը ունեցող array-ի ինդեքսը:

let arr = [
  [1, 2, 3, 4],
  [8, 24, 7],
  [81, 45, 64],
];

function sum(subArr) {
  let sum = 0;
  for (let j = 0; j < subArr.length; j++) {
    sum += subArr[j];
  }
  return sum;
}
const max = function (arr) {
  return Math.max(...arr);
};

function findIndexOfArr(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(sum(arr[i]));
  }
  return newArr.indexOf(max(newArr));
}

console.log(findIndexOfArr(arr));
