let num = 12345;

function sumOfDigits(num) {
  if (num > 0 && num <= 9) {
    return num;
  }

  let lastDigit = num % 10;
  let newNum = Math.floor(num / 10);

  let sum = sumOfDigits(newNum);

  let result = sum + lastDigit;

  return result;
}
