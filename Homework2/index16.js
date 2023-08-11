//Implement shift() method
//The shift() method of Array instances removes the first element from an array and returns that
// removed element. This method changes the length of the array.

let temp = "";
function shiftEl(arr) {
  for (let i = 0; i < arr.length / 2; i++) {
    temp = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = temp;
  }

  let remEl = arr[arr.length - 1];

  delete arr[arr.length - 1];
  arr.length -= 1;

  for (let j = 0; j < arr.length / 2; j++) {
    temp = arr[j];
    arr[j] = arr[arr.length - 1 - j];
    arr[arr.length - 1 - j] = temp;
  }

  return remEl;
}

console.log(shiftEl([456, 7, 0, -98, 64, 8]));
