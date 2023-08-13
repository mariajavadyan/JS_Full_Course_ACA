function myforEach(arr, func) {
  for (let i = 0; i < arr.length; i++) {
    func(arr[i]);
  }
}

myforEach([1, 2, 3, 4, 5], (element) => {
  console.log(element);
});
