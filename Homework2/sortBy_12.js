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
console.log(sortBy([7, 8, 11, 66], "Desc"));
