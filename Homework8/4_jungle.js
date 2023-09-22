class Jungle {
  constructor() {
    this.animals = [];
  }

  addAnimal(animal) {
    this.animals.push(animal);
  }

  soundOff() {
    this.animals.forEach((animal) => {
      animal.makeSound();
      console.log(`${animal.constructor.name} my energy is ${animal.energy}`);
    });
  }
}

class Animal {
  constructor(energy = 20) {
    this.energy = energy;
  }

  makeSound() {
    this.energy -= 3;
  }

  eatFood() {
    this.energy += 5;
  }

  sleep() {
    this.energy += 10;
  }
}

class Food {}

class Tiger extends Animal {
  constructor() {
    super();
  }

  sleep() {
    super.sleep();
    this.energy += 5;
  }

  eatFood(food) {
    if (!(food instanceof Grain)) {
      super.eatFood();
    } else {
      console.log("I can't eat that.");
    }
  }
}

class Monkey extends Animal {
  constructor() {
    super();
  }

  makeSound() {
    super.makeSound();
    this.energy -= 4;
  }

  eatFood(food) {
    if (!(food instanceof Grain)) {
      super.eatFood();
      this.energy += 2;
    }
  }

  play() {
    if (this.energy >= 8) {
      console.log("Oooo Oooo");
      this.energy -= 8;
    } else {
      console.log("I'm too tired");
    }
  }
}

class Snake extends Animal {
  constructor() {
    super();
  }
}

class Fish extends Food {}

class Grain extends Food {}

class Meat extends Food {}

let jungle = new Jungle();
let tiger = new Tiger();
let monkey = new Monkey();
let snake = new Snake();
let fish = new Fish();
let grain = new Grain();
let meat = new Meat();

jungle.addAnimal(tiger);
jungle.addAnimal(monkey);
jungle.addAnimal(snake);

tiger.sleep();
monkey.eatFood(fish);
monkey.makeSound();
monkey.play();
snake.makeSound();

jungle.soundOff();

tiger.eatFood(grain);

tiger.makeSound();
