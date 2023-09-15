let studentLabs2 = [
  {
    student: "Blake",
    myCode: function (num) {
      return Math.pow(num, num);
    },
  },
  {
    student: "Jessica",
    runLab: function (num) {
      return Math.pow(num, num);
    },
  },
  {
    student: "Mya",
    runLab: function (num) {
      return num * num;
    },
  },
];

function gradeLabs(studentLabs) {
  for (let i = 0; i < studentLabs.length; i++) {
    let lab = studentLabs[i];

    try {
      if (typeof lab.runLab === "function") {
        let result = lab.runLab(5);
        console.log(`${lab.student}: ${result}`);
      } else {
        throw new Error("Error thrown");
      }
    } catch (error) {
      console.log(`${lab.student}: ${error.message}`);
    }
  }
}

gradeLabs(studentLabs2);
