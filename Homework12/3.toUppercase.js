let param = "hello";
//let param = 567;

function toUpperCase(param) {
  return new Promise((resolve, reject) => {
    if (typeof param === "string") {
      setTimeout(() => {
        resolve(param.toUpperCase());
      }, 500);
    } else {
      setTimeout(() => {
        reject(`Cannot convert '${param}' to uppercase !`);
      }, 500);
    }
  });
}

toUpperCase(param)
  .then((result) => {
    console.log("Resolved:", result);
  })
  .catch((error) => {
    console.log("Rejected:", error);
  });
