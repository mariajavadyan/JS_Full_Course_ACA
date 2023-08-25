// 4.Implement a simple person object with private properties using closures.

function createPerson(name, age) {
  let _name = name;
  let _age = age;

  return {
    getName: function () {
      return _name;
    },
    getAge: function () {
      return _age;
    },
    setName: function (newName) {
      _name = newName;
      return _name;
    },
    setAge: function (newAge) {
      _age = newAge;
      return _age;
    },
  };
}

const person = createPerson("Alice", 30);
person.setName("Bob");
person.setAge(25);
