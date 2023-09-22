class University {
  constructor() {
    this.teachers = [];
    this.students = [];
  }

  addMember(member) {
    if (member instanceof Student) {
      this.students.push(member);
    } else if (member instanceof Teacher) {
      this.teachers.push(member);
    }
  }

  removeMember(member) {
    if (member instanceof Student) {
      this.students = this.students.filter((student) => student !== member);
    } else if (member instanceof Teacher) {
      this.teachers = this.teachers.filter((teacher) => teacher !== member);
    }
  }

  //   removeMember(member) {
  //     if (member instanceof Teacher) {
  //       let index = this.teachers.indexOf(member);
  //       if (index !== -1) {
  //         this.teachers = this.teachers.splice(index, 1);
  //       }
  //     } else if (member instanceof Student) {
  //       let index = this.students.indexOf(member);
  //       if (index !== -1) {
  //         this.students = this.students.splice(index, 1);
  //       }
  //     }
  //   }

  startLesson() {
    this.students.forEach((student) => {
      if (student.energy >= 2) {
        student.energy -= 2;
      }
    });
    this.teachers.forEach((teacher) => {
      if (teacher.energy >= 5) {
        teacher.energy -= 5;
      }
    });
  }
}

class UniversityMember {
  constructor(name, age, role, energy = 24) {
    this.name = name;
    this.age = age;
    this.role = role;
    this.energy = energy;
  }

  info() {
    return `${this.name} is ${this.age} years old ${this.role} with energy ${this.energy}`;
  }
}

class Student extends UniversityMember {}

class Teacher extends UniversityMember {}

let student1 = new Student("Anie", 20, "Student");
let student2 = new Student("Jack", 22, "Student");
let teacher1 = new Teacher("John", 35, "Teacher");
let teacher2 = new Teacher("Alice", 37, "Teacher");

let university = new University();

university.addMember(student1);
university.addMember(student2);
university.addMember(teacher1);
university.addMember(teacher2);

university.removeMember(student1);
