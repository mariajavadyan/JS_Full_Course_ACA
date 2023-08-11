//12.Create a function that takes an array of numbers arr, a string str and return an array of numbers as
//per the following rules

//   - "Asc" returns a sorted array in ascending order.
//   - "Desc" returns a sorted array in descending order.

// sortBy([4, 3, 2, 1], "Asc"); // [1, 2, 3, 4]
// sortBy([7, 8, 11, 66]); // [7, 8, 11, 66]
// sortBy([7, 8, 11, 66], "Desc"); // [66, 11, 8, 7]

function sortBy(arr, str) {
  if (str === "Asc") {
    arr.sort((a, b) => a - b);
  }

  if (str === "Desc") {
    arr.sort((a, b) => b - a);
  }
  return arr;
}

console.log(sortBy([4, 3, 2, 1], "Asc"));
console.log(sortBy([7, 8, 11, 66]));
console.log(sortBy([7, 8, 11, 66], "Desc"));
