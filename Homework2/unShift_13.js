function unShiftEl(arr, ...elems) {
  let arrLeng = arr.length;

  for (let i = arrLeng - 1; i >= 0; i--) {
    arr[i + elems.length] = arr[i];
  }

  for (let j = 0; j < elems.length; j++) {
    arr[j] = elems[j];
  }

  console.log(arr);
  return arr.length;
}

console.log(unShiftEl([7, 2, 5, 13], 13, 65, 78, 11));
