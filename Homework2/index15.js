//Implement unshift() method
//The unshift() method of Array instances adds the specified elements to the beginning of an
//array and returns the new length of the array.

let temp = "";
function unShiftEl(arr, ...elems) {
  for (let i = 0; i < arr.length / 2; i++) {
    temp = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = temp;
  }

  for (let j = elems.length - 1; j >= 0; j--) {
    arr[arr.length] = elems[j];
  }

  for (let k = 0; k < arr.length / 2; k++) {
    temp = arr[k];
    arr[k] = arr[arr.length - 1 - k];
    arr[arr.length - 1 - k] = temp;
  }
  console.log(arr);
  return arr.length;
}

console.log(unShiftEl([7, 2, 5], 65, 78, 11));
