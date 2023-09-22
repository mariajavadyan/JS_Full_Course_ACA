class Account {
  #balance;
  constructor(name) {
    this.id = Math.floor(Math.random() * 100);
    this.name = name;
    this.#balance = 0;
  }

  getBalance() {
    return this.#balance;
  }

  setBalance(newBalance) {
    if (newBalance > 0) {
      this.#balance = newBalance;
    }
  }

  credit(amount) {
    if (amount > 0) {
      this.#balance += amount;
    }
  }

  debit(amount) {
    if (amount <= this.#balance) {
      this.#balance -= amount;
    } else {
      return "You don't have enough balance";
    }
  }

  transferTo(otherAccount, amount) {
    if (amount <= this.#balance && otherAccount instanceof Account) {
      this.#balance -= amount;
      otherAccount.credit(amount);
    } else {
      return "You don't have enough balance for transfer";
    }
  }

  static identifyAccounts(name1, name2) {
    return [name1.id, name2.id];
  }
}

let saving = new Account("saving", 1000);
let current = new Account("current", 8000);

saving.credit(5000);

saving.debit(1000);
saving.debit(2000);

saving.transferTo(current, 1000);
console.log(saving.getBalance());
console.log(current.getBalance());
let res = Account.identifyAccounts(current, saving);
