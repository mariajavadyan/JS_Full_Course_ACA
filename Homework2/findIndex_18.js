function myFindIndex(arr, testFunc) {
  for (let i = 0; i < arr.length; i++) {
    if (testFunc(arr[i]) === true) {
      return i;
    }
  }

  return -1;
}

console.log(myFindIndex([7, 2, 5, 64, 44, 9], (el) => el > 33));
