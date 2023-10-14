class Stack {
  constructor() {
    this.storage = [];
  }

  push(element) {
    this.storage.push(element);
  }

  pop() {
    if (!this.storage.length) {
      return "Underflow";
    }
    return this.storage.pop();
  }

  top() {
    if (!this.storage.length) {
      return "Stack is empty";
    }
    return this.storage[this.storage.length - 1];
  }

  isEmpty() {
    return this.storage.length === 0;
  }

  getSize() {
    return this.storage.length;
  }
}

let stack = new Stack();

stack.push(19);
stack.push(21);
stack.push(37);
stack.push(56);
