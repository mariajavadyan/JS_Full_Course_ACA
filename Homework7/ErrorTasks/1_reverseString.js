function reverseString(s) {
  try {
    s = s.split("").reverse().join("");
  } catch (error) {
    console.log(error.message);
  } finally {
    console.log(s);
  }
}

let inputString1 = "Number(1234)";

reverseString(inputString1);
