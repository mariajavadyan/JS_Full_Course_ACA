//Implement flat() method
// The flat() method of Array instances creates a new array with all sub-array elements
// concatenated into it recursively up to the specified depth.

function myFlat(arr, depth) {
  if (depth < 1) {
    return arr;
  }

  let temp = arr;

  for (let d = 0; d < depth; d++) {
    let newTemp = [];

    for (let i = 0; i < temp.length; i++) {
      if (Array.isArray(temp[i])) {
        for (let j = 0; j < temp[i].length; j++) {
          newTemp.push(temp[i][j]);
        }
      } else {
        newTemp.push(temp[i]);
      }
    }

    temp = newTemp;
  }

  return temp;
}

console.log(myFlat([1, [2, [3, 4], 5], 6], 2));
//console.log(myFlat([1, [2, [[3, 4], 7, 16], 5], 6], 4));
