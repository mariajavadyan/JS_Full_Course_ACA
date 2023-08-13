const arr = ["ant", "bison", "camel", "duck", "elephant"];

function mySlice(arr, ...index) {
  let newArr = [];

  if (index.length === 0) {
    for (let k = 0; k < arr.length; k++) {
      newArr[k] = arr[k];
    }
  } else if (index.length === 1 && index[0] > 0) {
    for (let i = index[0]; i < arr.length; i++) {
      newArr[newArr.length] = arr[i];
    }
  } else if (index.length === 1 && index[0] < 0) {
    for (let j = arr.length + index[0]; j < arr.length; j++) {
      newArr[newArr.length] = arr[j];
    }
  }

  if (index.length === 2 && index[0] >= 0 && index[1] >= 0) {
    for (let m = index[0]; m < index[1]; m++) {
      newArr[newArr.length] = arr[m];
    }
  } else if (index.length === 2 && index[0] >= 0 && index[1] < 0) {
    for (let p = index[0]; p < arr.length + index[1]; p++) {
      newArr[newArr.length] = arr[p];
    }
  } else if (
    index.length === 2 &&
    index[0] < 0 &&
    index[1] < 0 &&
    index[1] > index[0]
  ) {
    for (let q = arr.length + index[0]; q < arr.length + index[1]; q++) {
      newArr[newArr.length] = arr[q];
    }
  }

  return newArr;
}

console.log(mySlice(arr, 2, 4));
