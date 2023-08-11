//Implement findIndex() method
//The findIndex() method of Array instances returns the index of the first element in an
//array that satisfies the provided testing function. If no elements satisfy the testing function,
// -1 is returned.

function myFindIndex(arr, testFunc) {
  let result;
  for (let i = 0; i < arr.length; i++) {
    if (testFunc(arr[i]) === true) {
      result = i;
      break;
    } else {
      result = -1;
    }
  }

  return result;
}

//console.log(myFindIndex([7, 2, 5, 0], (el) => el > 13));
console.log(myFindIndex([7, 2, 5, 64, 44, 9], (el) => el > 13));
