let arr = [1, 2, 3, 4, 5];
function arraySum(arr) {
  if (arr.length === 0) {
    return 0;
  }
  return arr.pop() + arraySum(arr);
}
