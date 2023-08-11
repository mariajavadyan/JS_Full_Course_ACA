//7.Given an array, return a new array that only includes the numbers

const arr = [1, 2, "a", true, {}, undefined, 55, false, "hi", null, 166, NaN];

function onlyNums(arr) {
  let newArr = arr.filter(
    (value) => typeof value === "number" && !isNaN(value)
  );

  return newArr;
}

console.log(onlyNums(arr));
