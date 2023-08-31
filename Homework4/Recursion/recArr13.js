function generateCombinations(arr, k) {
  if (k === 0) {
    return [[]];
  }

  if (arr.length === 0) {
    return [];
  }

  let firstElem = arr[0];
  let restOfArray = arr.slice(1);
  let combinationsWithoutFirst = generateCombinations(restOfArray, k);
  let combinationsWithFirst = generateCombinations(restOfArray, k - 1);

  let result = [];

  for (let combination of combinationsWithFirst) {
    result.push([firstElem, ...combination]);
  }

  return result.concat(combinationsWithoutFirst);
}

let inputArray = [1, 2, 3, 4];
console.log(generateCombinations(inputArray, 2));
