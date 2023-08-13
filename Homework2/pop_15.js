function popEl(arr) {
  let lastEl = arr[arr.length - 1];
  arr.length -= 1;
  return lastEl;
}

console.log(popEl([5, 3, 7, 9]));
