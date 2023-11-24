const FULFILLED = "fulfilled";
const PENDING = "pending";
const REJECTED = "rejected";

class MyPromise {
  constructor(executor) {
    this.state = PENDING;
    this.result = null;
    this.onFulfilledFn = [];
    this.onRejectedFn = [];

    const resolve = (value) => {
      if (this.state === PENDING) {
        this.state = FULFILLED;
        this.result = value;
        this.onFulfilledFn.forEach((fn) => fn(value));
      }
    };

    const reject = (error) => {
      if (this.state === PENDING) {
        this.state = REJECTED;
        this.result = error;
        this.onRejectedFn.forEach((fn) => fn(error));
      }
    };

    try {
      executor(resolve, reject);
    } catch (error) {
      reject(error);
    }
  }

  then(onFulfilled, onRejected) {
    return new MyPromise((resolve, reject) => {
      if (this.state === PENDING) {
        if (onFulfilled) {
          this.onFulfilledFn.push(() => {
            try {
              const newResult = onFulfilled(this.result);
              if (newResult instanceof MyPromise) {
                newResult.then(resolve, reject);
              } else {
                resolve(newResult);
              }
            } catch (error) {
              reject(error);
            }
          });
        }
        if (onRejected) {
          this.onRejectedFn.push(() => {
            try {
              const newResult = onRejected(this.result);
              if (newResult instanceof MyPromise) {
                newResult.then(resolve, reject);
              } else {
                reject(newResult);
              }
            } catch (error) {
              reject(error);
            }
          });
        }
        return;
      }

      if (onFulfilled && this.state === FULFILLED) {
        try {
          const newResult = onFulfilled(this.result);
          if (newResult instanceof MyPromise) {
            newResult.then(resolve, reject);
          } else {
            resolve(newResult);
          }
        } catch (error) {
          reject(error);
        }

        return;
      }
      if (onRejected && this.state === REJECTED) {
        try {
          const newResult = onRejected(this.result);
          if (newResult instanceof MyPromise) {
            newResult.then(resolve, reject);
          } else {
            reject(newResult);
          }
        } catch (error) {
          reject(error);
        }
        return;
      }
    });
  }

  catch(onRejected) {
    return this.then(null, onRejected);
  }
}

const promise = new MyPromise((resolve, reject) => {
  setTimeout(() => resolve("sucess"), 1000);
})
  .then((value) => {
    return value + " first then";
  })
  .then((value) => {
    return value + " second then";
  })
  .then((value) => {
    console.log(value);
  });
