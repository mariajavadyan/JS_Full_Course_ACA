function Car(model, milesPerGallon) {
  this.model = model;
  this.milesPerGallon = milesPerGallon;
  this.tank = 0;
  this.odometer = 0;
}

Car.prototype.fill = function (galoons) {
  this.tank += galoons;
  let message = `I filled tank with ${galoons} galoons, current tank is ${this.tank} `;
  return message;
};

Car.prototype.drive = function (distance) {
  let allDistance = this.tank * this.milesPerGallon;
  if (distance <= allDistance) {
    this.odometer += distance;
    this.tank = this.tank - distance / this.milesPerGallon;
    return `I successfully drove ${distance} miles spending ${
      distance / this.milesPerGallon
    } gallons for that, current odometer number ${
      this.odometr
    } miles, current tank is ${this.tank} gallons!`;
  } else {
    this.odometr += allDistance;
    this.tank = 0;
    return `I ran out of fuel at ${this.odometr} miles!`;
  }
};

let myCar = new Car("Mini couper", 25);

myCar.fill(10);

myCar.drive(5);

myCar.drive(300);

myCar.fill(20);
myCar.drive(100);
