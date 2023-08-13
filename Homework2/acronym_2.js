function acronym(str) {
  let arr = str.split(" ");
  let newStr = "";

  arr.forEach((element) => (newStr += element[0]));

  return newStr.toUpperCase();
}

console.log(acronym("Have a good night"));
