class Users {
  constructor(userArr) {
    this.users = new Map();
    if (userArr) {
      userArr.forEach((user) => {
        this.users.set(user.id, user);
      });
    }
  }

  addUsers(userArr) {
    if (userArr) {
      userArr.forEach((user) => {
        this.users.set(user.id, user);
      });
    }
  }

  getUserById(userId) {
    return this.users.get(userId);
  }
}

const mappedUser = new Users([
  { id: 1, name: "Alice", email: "alice@example.com" },
  { id: 2, name: "Bob", email: "bob@example.com" },
]);

mappedUser.addUsers([{ id: 3, name: "Ann", email: "ann@example.com" }]);
