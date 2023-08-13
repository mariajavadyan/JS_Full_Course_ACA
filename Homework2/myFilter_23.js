function myFilter(arr, testFunc) {
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (testFunc(arr[i])) {
      newArr[newArr.length] = arr[i];
    }
  }

  return newArr;
}

console.log(myFilter([37, 21, 4, 67, 90, 7, 12, 8, 36], (el) => el % 3 === 0));
