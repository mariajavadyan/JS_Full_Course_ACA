let nestedArray = [1, [2, [3, 4], 5], 6];

function flattenArray(nestedArray) {
  let newArr = [];

  for (let i = 0; i < nestedArray.length; i++) {
    if (Array.isArray(nestedArray[i])) {
      newArr = newArr.concat(flattenArray(nestedArray[i]));
    } else {
      newArr.push(nestedArray[i]);
    }
  }
  return newArr;
}
