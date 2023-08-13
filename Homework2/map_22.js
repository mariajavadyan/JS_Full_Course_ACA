function myMap(arr, myFunc) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr[i] = myFunc(arr[i]);
  }

  return newArr;
}

console.log(myMap([2, 5, 7, 10], (x) => x * 2));
