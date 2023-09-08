function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.compareAge = function (person2) {
  if (this.age > person2.age) {
    return `${person2.name} is younger than me.`;
  } else if (this.age < person2.age) {
    return `${person2.name} is older than me.`;
  } else {
    return `${person2.name} is the same age as me.`;
  }
};

const p1 = new Person("Samuel", 24);
const p2 = new Person("Joel", 36);
const p3 = new Person("Lily", 24);

p1.compareAge(p2);
p2.compareAge(p1);
p1.compareAge(p3);
