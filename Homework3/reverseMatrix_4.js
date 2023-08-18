//Տրված է հավասարաչափ մատրիցա (nxm). շրջել մատրիցան այնպես, որ տողերը դառնան
//սյուներ, իսկ սյուները՝ տողեր

let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [10, 11, 12],
];

function reverseRowCol(matrix) {
  let newMatrix = [];

  for (let count = 0; count < matrix[0].length; count++) {
    let temp = [];
    for (let i = 0; i < matrix.length; i++) {
      temp.push(matrix[i][count]);
    }
    newMatrix.push(temp);
  }
  return newMatrix;
}

console.log(reverseRowCol(matrix));
