//Implement reduce() method

function myReduce(arr, myFunct, initialVal) {
  let acc = initialVal !== undefined ? initialVal : arr[0];
  let firstEl = initialVal !== undefined ? 0 : 1;

  for (let i = firstEl; i < arr.length; i++) {
    acc = myFunct(acc, arr[i], i, arr);
  }

  return acc;
}

const arr = [1, 2, 3, 4, 5];

const sum = myReduce(arr, (acc, currentVal) => acc + currentVal, 0);
console.log(sum);
