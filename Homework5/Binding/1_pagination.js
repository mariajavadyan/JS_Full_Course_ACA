// 1.Write Pagination object that will get an array and pageSize, then will return the following.
// prevPage, nextPage, firstPage, lastPage,goToPage, getPageItems

const alphabetArray = "abcdefghijklmnopqrstuvwxyz".split("");

let Pagination = {
  init: function (arr, pageSize) {
    this.arr = arr;
    this.pageSize = pageSize;
    this.currentPage = 0;
    return this;
  },

  firstPage: function () {
    this.currentPage = 0;
    return this;
  },
  lastPage: function () {
    this.currentPage = Math.ceil(this.arr.length / this.pageSize) - 1;
    return this;
  },

  prevPage: function () {
    if (this.currentPage > 0) {
      this.currentPage -= 1;
    }
    return this;
  },

  nextPage: function () {
    if (this.currentPage < Math.ceil(this.arr.length / this.pageSize) - 1) {
      this.currentPage += 1;
    }
    return this;
  },

  goToPage: function (pageNum) {
    if (pageNum >= 0 && pageNum < Math.ceil(this.arr.length / this.pageSize)) {
      this.currentPage = pageNum;
      return this;
    }
  },

  getPageItems: function () {
    return this.arr.slice(
      this.currentPage * this.pageSize,
      this.currentPage * this.pageSize + this.pageSize
    );
  },
};

Pagination.init(alphabetArray, 4);
console.log(Pagination.getPageItems()); // ["a", "b", "c", "d"]
Pagination.nextPage(); // add the current page by one
console.log(Pagination.getPageItems()); // ["e", "f", "g", "h"]
Pagination.nextPage().nextPage(); // the ability to call chainable
console.log(Pagination.getPageItems());
Pagination.goToPage(3); // current page must be set to 3
