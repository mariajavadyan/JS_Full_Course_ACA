let numbers = [2, 3, 4, 2, 5, 2, 6, 2];

function countOccurrences(arr, num) {
  if (arr.length === 0) {
    return 0;
  } else {
    if (arr[0] === num) {
      return 1 + countOccurrences(arr.slice(1), num);
    } else {
      return countOccurrences(arr.slice(1), num);
    }
  }
}
