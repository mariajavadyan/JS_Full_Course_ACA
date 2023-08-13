function mySome(arr, testFunc) {
  for (let i = 0; i < arr.length; i++) {
    if (testFunc(arr[i])) {
      return true;
    }
  }

  return false;
}

console.log(mySome([17, 3, 9, 8, 57], (elem) => elem < 5));
