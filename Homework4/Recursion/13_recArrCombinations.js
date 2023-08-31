function generateCombinations(inputArray, k) {
  let result = [];

  function backtrack(startIndex = 0, currentCombination = []) {
    if (currentCombination.length === k) {
      result.push([...currentCombination]);
    }

    for (let i = startIndex; i < inputArray.length; i++) {
      currentCombination.push(inputArray[i]);
      backtrack(i + 1, currentCombination);
      currentCombination.pop();
    }
  }

  backtrack();
  return result;
}
