function Baby(name, age, favoriteToy) {
  this.name = name;
  this.age = age;
  this.favoriteToy = favoriteToy;
}

Baby.prototype.play = function () {
  return `${this.name} playing with ${this.favoriteToy}`;
};

let babyGirl = new Baby("Tina", 1, "barbie");
let babyBoy = new Baby("Teo", 1, "car");

babyGirl.play();

babyBoy.play();
