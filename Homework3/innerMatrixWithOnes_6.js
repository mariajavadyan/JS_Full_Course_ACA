// Տրված է քառակուսաձեւ մատրիցա (nxn) բաղկացած զրոներից եւ մեկերից. գտնել միայն
//մեկերից բաղկացած ամենամեծ ներդրված քառակուսաձեւ(kxk) մատրիցայի երկարթյունը

let matrix = [
  [0, 1, 1, 0, 1],
  [0, 1, 1, 1, 0],
  [0, 1, 1, 1, 1],
  [1, 1, 1, 1, 1],
  [0, 0, 0, 0, 1],
];

function innerMatrix(globalMatrix, startI, startJ, innerMatrixSize) {
  let innerMatr = [];
  if (
    startI + innerMatrixSize <= globalMatrix.length &&
    startJ + innerMatrixSize <= globalMatrix.length
  ) {
    for (let k = 0; k < innerMatrixSize; k++) {
      innerMatr.push(
        globalMatrix[startI + k].slice(startJ, startJ + innerMatrixSize)
      );
    }
  }
  return innerMatr;
}

let bestI = -1;
let bestJ = -1;
let bestLength = -1;

for (let s = 1; s <= matrix.length; s++) {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      let candidate = innerMatrix(matrix, i, j, s);
      if (isGood(candidate) && candidate.length >= bestLength) {
        bestLength = candidate.length;
        bestI = i;
        bestJ = j;
      }
    }
  }
}

function isGood(matrixToCheck) {
  for (let i = 0; i < matrixToCheck.length; i++) {
    for (let j = 0; j < matrixToCheck[i].length; j++) {
      if (matrixToCheck[i][j] !== 1) {
        return false;
      }
    }
  }
  return true;
}

console.log("Coordinate i is " + bestI);
console.log("Coordinate j is " + bestJ);
console.log("Length of matrix is " + bestLength);
console.log(innerMatrix(matrix, bestI, bestJ, bestLength));
