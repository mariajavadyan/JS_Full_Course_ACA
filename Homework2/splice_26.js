function mySplice(arr, start, deleteCount, ...items) {
  const removed = [];

  if (start < 0) {
    start = Math.max(arr.length + start, 0);
  }

  deleteCount = Math.min(Math.max(deleteCount, 0), arr.length - start);

  for (let i = 0; i < deleteCount; i++) {
    removed[i] = arr[start + i];
  }

  for (let i = start + deleteCount; i < arr.length; i++) {
    arr[i - deleteCount] = arr[i];
  }

  arr.length -= deleteCount;

  for (let i = arr.length - 1; i >= start; i--) {
    arr[i + items.length] = arr[i];
  }

  for (let i = 0; i < items.length; i++) {
    arr[start + i] = items[i];
  }

  return removed;
}
let myArr = [1, 2, 3, 4, 5];
let removedItems = mySplice(myArr, 1, 2, 6, 7);
console.log(removedItems);
console.log(myArr);
