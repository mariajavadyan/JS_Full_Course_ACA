//6. Write a function which parses string integers. If it's not possible to parse, then add null
//parseInteger(["1", "2", "34"]); // [1, 2, 34];
//parseInteger(["1", "px", "2323"]); // [1, null, 2323];

//let arr = ["1", "2", "34"];
let arr = ["1", "px", "2323"];

function parseInteger(arr) {
  let newArr = [];

  newArr = arr.map((value) => (isNaN(+value) ? null : +value));

  return newArr;
}

console.log(parseInteger(arr));
