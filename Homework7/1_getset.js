let obj = {
  _persons: [],

  get name() {
    return this._persons;
  },

  set name(value) {
    let words = value.split(", ");

    this._persons = words.map((word) => [word, word.length]);
  },
};

obj.name = "Hamlet, Artavazd";
