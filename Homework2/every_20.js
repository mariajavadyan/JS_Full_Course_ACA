function myEvery(arr, testFunc) {
  let result = false;
  for (let i = 0; i < arr.length; i++) {
    if (testFunc(arr[i])) {
      result = true;
    } else {
      result = false;
      break;
    }
  }

  return result;
}

console.log(myEvery([17, 24, 3, 8, 15], (elem) => elem < 40));
