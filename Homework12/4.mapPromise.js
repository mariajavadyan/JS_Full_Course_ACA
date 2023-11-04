const myPromise = new Promise((resolve, reject) => {
  resolve(2);
});
const timesTwo = (val) => val * 2;

function mapPromise(myPromise, transformerFunc) {
  return new Promise((resolve, reject) => {
    myPromise
      .then((result) => {
        try {
          resolve(transformerFunc(result));
        } catch (error) {
          reject(error);
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
}

mapPromise(myPromise, timesTwo)
  .then((result) => console.log(result))
  .catch((error) => console.error(error));
