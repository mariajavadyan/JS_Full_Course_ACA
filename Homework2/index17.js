//Implement forEach() method
//The forEach() method of Array instances executes a provided function once for each array element.

let arr = [7, 8, 3, 5];

function myforEach(arr, func) {
  for (let i = 0; i < arr.length; i++) {
    func(arr[i]);
  }
}

myforEach(arr, (element) => {
  console.log(element);
});
