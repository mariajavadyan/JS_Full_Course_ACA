//Տրված է թվերի մատրիցա (nxm), դուրս բերել բոլոր տողերի մինիմումներից բաղկացած
//զանգվածը

let arr = [
  [1, 2, 3, 4],
  [8, 24, 7],
  [81, 97],
];

const min = function (subArr) {
  return Math.min(...subArr);
};

function minOfArrs(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(min(arr[i]));
  }
  return newArr;
}

console.log(minOfArrs(arr));
