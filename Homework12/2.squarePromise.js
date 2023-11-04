let promise = new Promise((resolve, reject) => {
  let num = 12;
  resolve(num);
});

function squarePromise(promise) {
  return new Promise((resolve, reject) => {
    promise
      .then((num) => {
        if (typeof num === "number") {
          resolve(num * num);
        } else if (typeof num === "string" && !isNaN(num)) {
          num = Number(num);
          resolve(num * num);
        } else {
          reject(`Cannot convert '${num}' to a number!`);
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
}

squarePromise(promise)
  .then((num) => {
    console.log("Resolved ", num);
  })
  .catch((error) => {
    console.log("Rejected :", error);
  });
