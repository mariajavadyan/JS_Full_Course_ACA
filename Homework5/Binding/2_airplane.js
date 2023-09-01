//2.  Write an Airplane object that initializes name.
// Give airplanes the ability to .takeOff() and .land():
// If a plane takes off, its isFlying property is set to true.
// If a plane lands, its isFlying property is set to false.

let airplane = {
  init: function (name) {
    this.name = name;
    this.isFlying = false;
  },

  takeOff: function () {
    if (!this.isFlying) {
      this.isFlying = true;
    }
    return `Airplane ${this.name} is ${this.isFlying ? "flying" : "landed"}`;
  },
  land: function () {
    if (this.isFlying) {
      this.isFlying = false;
    }
    return `Airplane ${this.name} is ${this.isFlying ? "flying" : "landed"}`;
  },
};

airplane.init("SkysWell");
