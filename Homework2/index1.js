//1.Concatenate the two arrays
// const arr1 = [1, 2, 3, 4];
// const arr2 = [5, 6, 7, 8, 9];

// const arr3; // [1, 2, 3, 4, 5, 6, 7, 8, 9]

function concat(arr1, arr2) {
  const arr3 = arr1.concat(arr2);
  return arr3;
}

console.log(concat([1, 2, 3, 4], [5, 6, 7, 8, 9]));
