//3.Given a word, compute the scrabble score for the given word. To calculate scrabble score use the//Hint: to save this data use an array,
//where indices are scores and each element is the sequence of
//ppropriate characters([‘aeioulnrstʼ, ...])

//ettersValue
// a, e, i, o, u, l, n, r, s, t  1
// d, g                          2
// b, c, m, p                    3
// f, h, v, w, y                 4
// k                             5
// j, x                          6
// q, z                          7

function sumOfLetters(arr, word) {
  let newArr = word.split("");

  let sum = 0;

  newArr.forEach((el) =>
    arr.forEach((arrEl) => {
      arrEl.includes(el) ? (sum += arr.indexOf(arrEl) + 1) : (sum += 0);
    })
  );

  return sum;
}

console.log(
  sumOfLetters(["aeioulnrst", "dg", "bcmp", "hvwy", "k", "jx", "qz"], "hello")
);
