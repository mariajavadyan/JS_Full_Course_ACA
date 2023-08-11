//Implement find() method
//The find() method of Array instances returns the first element
//in the provided array that satisfies the provided testing function.
//If no values satisfy the testing function, undefined is returned

function myFind(arr, testFunc) {
  let result;
  for (let i = 0; i < arr.length; i++) {
    if (testFunc(arr[i]) === true) {
      result = arr[i];
      break;
    } else {
      result = "undefined";
    }
  }

  return result;
}

//console.log(myFind([9, 4, 7, 13, 0, 1], (el) => el > 50));
console.log(myFind([9, 4, 7, 13, 130, 44], (el) => el > 50));
