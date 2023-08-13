function parseInteger(arr) {
  return arr.map((value) => (isNaN(+value) ? null : +value));
}

console.log(parseInteger(["1", "px", "2323"]));
