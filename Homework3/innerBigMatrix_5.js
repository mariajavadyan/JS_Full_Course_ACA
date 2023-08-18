//Տրված է քառակուսաձեւ մատրիցա (nxn), վերադարձնել ամենամեծ ներդրված մատրիցան(այսինքն
//դիտարկում ենք միայն կից տողեր ու սյուներ) , որի տողերի ու սյուների գումարը չի գերազանցի նշված k թիվը

let k = 9;
let matrix = [
  [1, 2, 3, 4, 5],
  [2, 0, 5, 38, 23],
  [1, 21, 0, 1, 2],
  [7, 2, 4, 3, 1],
  [0, 4, 2, 1, 5],
];

function innerMatrix(globalMatrix, startI, startJ, innerMatrixSize) {
  let innerMatr = [];
  if (
    startI + innerMatrixSize <= globalMatrix.length &&
    startJ + innerMatrixSize <= globalMatrix.length
  ) {
    for (let p = 0; p < innerMatrixSize; p++) {
      innerMatr.push(
        globalMatrix[startI + p].slice(startJ, startJ + innerMatrixSize)
      );
    }
  }
  return innerMatr;
}

function maxSumOfRow(arr) {
  let sumOfRowArr = [];
  for (let i = 0; i < arr.length; i++) {
    let sum = 0;
    for (let j = 0; j < arr[i].length; j++) {
      sum += arr[i][j];
    }
    sumOfRowArr.push(sum);
  }
  return Math.max(...sumOfRowArr);
}

function maxsumOfCol(arr) {
  let sumOfColArr = [];
  for (let i = 0; i < arr.length; i++) {
    let sum = 0;
    for (let j = 0; j < arr[i].length; j++) {
      sum += arr[j][i];
    }
    sumOfColArr.push(sum);
  }
  return Math.max(...sumOfColArr);
}

function isGood(matrixToCheck, k) {
  if (maxsumOfCol(matrixToCheck) <= k && maxSumOfRow(matrixToCheck) <= k) {
    return true;
  }
  return false;
}

let bestI = -1;
let bestJ = -1;
let bestLength = -1;

for (let s = 1; s <= matrix.length; s++) {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      let candidate = innerMatrix(matrix, i, j, s);
      if (isGood(candidate, k) && candidate.length >= bestLength) {
        bestLength = candidate.length;
        bestI = i;
        bestJ = j;
      }
    }
  }
}

console.log("Coordinate i is " + bestI);
console.log("Coordinate j is " + bestJ);
console.log("Length of matrix is " + bestLength);
console.log(innerMatrix(matrix, bestI, bestJ, bestLength));
