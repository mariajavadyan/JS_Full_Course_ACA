//Implement push() method
// The push() method of Array instances adds the specified elements to the end of an array
// and returns the new length of the array.

function pushEl(arr, el) {
  arr[arr.length] = el;

  return arr.length;
}

console.log(pushEl([4, 5, 6], 18));
