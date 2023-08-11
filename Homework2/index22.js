//Implement map() method
//The map() method of Array instances creates a new array populated with the
//results of calling a provided function on every element in the calling array.

function myMap(arr, myFunc) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr[i] = myFunc(arr[i]);
  }

  return newArr;
}

console.log(myMap([2, 5, 7, 10], (x) => x * 2));
