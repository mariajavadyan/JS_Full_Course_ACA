function pushEl(arr, el) {
  arr[arr.length] = el;
  return arr.length;
}

console.log(pushEl([4, 5, 6], 18));
