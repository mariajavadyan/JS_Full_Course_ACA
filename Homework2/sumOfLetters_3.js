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
