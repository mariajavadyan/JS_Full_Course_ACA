class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.size = 0;
  }

  push(data) {
    let node = new Node(data);
    node.next = this.top;
    this.top = node;
    this.size++;
  }

  pop() {
    if (this.isEmpty()) {
      return null;
    }
    let poppedElement = this.top.data;
    this.top = this.top.next;
    this.size--;
    return poppedElement;
  }

  peek() {
    if (this.isEmpty()) {
      return null;
    }
    return this.top.data;
  }

  isEmpty() {
    return this.size === 0;
  }

  getSize() {
    return this.size;
  }
}

let stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(5);
stack.push(7);
