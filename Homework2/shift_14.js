let arr = [456, 7, 0, -98, 64, 8];

function shiftEl(arr) {
  if (arr.length === 0) {
    return "undefined";
  }
  let removedEl = arr[0];
  for (let i = arr.length; i > 0; i--) {
    delete arr[0];
  }

  for (let j = 0; j < arr.length; j++) {
    arr[j] = arr[j + 1];
  }
  arr.length -= 1;
  return removedEl;
}

console.log(shiftEl(arr));
console.log(arr);
