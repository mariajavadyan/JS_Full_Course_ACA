//Implement some() method
//The some() method of Array instances tests whether at least one element in the
//array passes the test implemented by the provided function. It returns true if,
//in the array, it finds an element for which the provided function
//returns true; otherwise it returns false. It doesn't modify the array.

function mySome(arr, testFunc) {
  let result;
  for (let i = 0; i < arr.length; i++) {
    if (testFunc(arr[i])) {
      result = true;
      break;
    } else {
      result = false;
    }
  }

  return result;
}

console.log(mySome([17, 3, 9, 8, 57], (elem) => elem < 5));
console.log(mySome([17, 87, 9, 8, 57], (elem) => elem < 5));
