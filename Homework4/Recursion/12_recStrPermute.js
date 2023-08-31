let str = "hello";
let permutedArr = [];

function permutations(str, result) {
  if (str.length === 0) {
    permutedArr.push(result);
  }

  for (let i = 0; i < str.length; i++) {
    let rest = str.slice(0, i) + str.slice(i + 1);
    permutations(rest, result + str[i]);
  }

  return permutedArr;
}
