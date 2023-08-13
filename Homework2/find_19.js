function myFind(arr, testFunc) {
  for (let i = 0; i < arr.length; i++) {
    if (testFunc(arr[i]) === true) {
      return arr[i];
    }
  }

  return "undefined";
}

console.log(myFind([9, 4, 7, 13, 130, 44], (el) => el > 50));
