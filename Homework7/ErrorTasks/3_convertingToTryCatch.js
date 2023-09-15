function reverseString(s) {
  try {
    if (typeof s !== "string") {
      throw new Error("s.split is not a function");
    } else {
      s = s.split("").reverse().join("");
      console.log(s);
    }
  } catch (error) {
    console.log(error.message);
  }
}

//let inputString1 = "Number(1234)";

let inputString1 = 2112;

reverseString(inputString1);
