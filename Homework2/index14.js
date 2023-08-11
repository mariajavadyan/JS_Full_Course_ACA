//Implement pop() method
//The pop() method of Array instances removes the last element from an array and returns that element.
// This method changes the length of the array

function popEl(arr) {
  let lastEl = arr[arr.length - 1];
  delEl = arr[arr.length - 1];
  delete arr[arr.length - 1];
  arr.length -= 1;

  return lastEl;
}

console.log(popEl([5, 3, 7, 9]));
