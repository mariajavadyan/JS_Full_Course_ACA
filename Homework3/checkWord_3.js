//Տրված է տողերի մատրիցա (nxm) եւ բառ: Հայտնաբերել արդյոք բառը գոյություն նի
//մատրիցայում ,թե ոչ:

let arr = [
  ["h", "c", "o", "m", "e"],
  ["o", "g", "e", "m", "n"],
  ["h", "e", "l", "l", "o"],
  ["a", "y", "b", "a", "n"],
];

function checkWord(arr, word) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] === word[0]) {
        let checkRow = true;
        for (let k = 1; k < word.length; k++) {
          if (j + k >= arr[i].length || arr[i][j + k] !== word[k])
            checkRow = false;
        }
        let checkCol = true;
        for (let p = 1; p < word.length; p++) {
          if (i + p >= arr.length || arr[i + p][j] !== word[p])
            checkCol = false;
        }
        if (checkCol || checkRow) {
          return true;
        }
      }
    }
  }

  return false;
}

console.log(checkWord(arr, "come"));
