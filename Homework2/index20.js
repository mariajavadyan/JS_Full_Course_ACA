//Implement every() method
//The every() method of Array instances tests whether all elements in the array pass the test implemented
// by the provided function. It returns a Boolean value.

function myEvery(arr, testFunc) {
  let result;
  for (let i = 0; i < arr.length; i++) {
    if (testFunc(arr[i])) {
      result = true;
    } else {
      result = false;
    }
  }

  return result;
}

console.log(myEvery([17, 24, 3, 8, 15], (elem) => elem < 40));
console.log(myEvery([175, 240, 93, 87, 57], (elem) => elem < 40));
