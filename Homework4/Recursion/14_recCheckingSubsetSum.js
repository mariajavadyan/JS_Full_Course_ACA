function subsetSum(arr, targetSum) {
  function checkSubsetSum(index, currentSum) {
    if (currentSum === targetSum) {
      return true;
    }
    if (index === arr.length) {
      return false;
    }

    let includeResult = checkSubsetSum(index + 1, currentSum + arr[index]);
    let excludeResult = checkSubsetSum(index + 1, currentSum);
    return includeResult || excludeResult;
  }

  return checkSubsetSum(0, 0);
}

let inputArray = [2, 4, 6, 8];
let targetSum = 8;

if (subsetSum(inputArray, targetSum)) {
  console.log("true");
} else {
  return console.log("false");
}
