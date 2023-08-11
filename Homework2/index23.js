//Implement filter() method
//The filter() method creates a new array filled with elements that pass a test provided by a function.
//The filter() method does not execute the function for empty elements. The filter() method does not
//change the original array. Return value newArr

function myFilter(arr, testFunc) {
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (testFunc(arr[i])) {
      newArr[newArr.length] = arr[i];
    }
  }

  return newArr;
}

//console.log(myFilter([2, 4, 17, 7], (el) => el % 3 === 0));
console.log(myFilter([37, 21, 4, 67, 90, 7, 12, 8, 36], (el) => el % 3 === 0));
