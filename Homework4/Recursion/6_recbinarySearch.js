function binarySearch(
  sortedArray,
  num,
  start = 0,
  end = sortedArray.length - 1
) {
  if (start > end) {
    return -1;
  }

  let middle = Math.floor((start + end) / 2);

  if (sortedArray[middle] === num) {
    return middle;
  } else if (sortedArray[middle] < num) {
    return binarySearch(sortedArray, num, middle + 1, end);
  } else {
    return binarySearch(sortedArray, num, start, middle - 1);
  }
}

const sortedArray = [1, 3, 5, 7, 9, 11, 13, 15, 17];
