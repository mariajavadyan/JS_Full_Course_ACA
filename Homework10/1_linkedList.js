class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  append(data) {
    let node = new Node(data);
    let current;
    if (!this.head) {
      this.head = node;
    } else {
      current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.size++;
  }

  prepend(data) {
    let node = new Node(data);
    let current;
    if (!this.head) {
      this.head = node;
    } else {
      current = this.head;
      this.head = node;
      node.next = current;
    }

    this.size++;
  }

  getAt(index) {
    let counter = 0;
    let node = this.head;
    while (node) {
      if (counter === index) {
        return node;
      }
      counter++;
      node = node.next;
    }
    return null;
  }

  insert(data, index) {
    let node = new Node(data);
    let currentNode = this.getAt(index);
    let prevNode = this.getAt(index - 1);

    if (index > this.size) {
      return false;
    } else {
      prevNode.next = node;
      node.next = currentNode;
    }

    this.size++;
  }

  removeAt(index) {
    if (index >= this.size || index < 0) {
      return null;
    } else {
      if (index === 0) {
        this.head = this.head.next;
      } else {
        let prevNode = this.getAt(index - 1);
        let currentNode = prevNode.next;
        prevNode.next = currentNode.next;
      }

      this.size--;
      return true;
    }
  }

  indexOf(data) {
    let index = 0;
    let node = this.head;
    while (node) {
      if (node.data === data) {
        return index;
      }
      node = node.next;
      index++;
    }
    return -1;
  }

  remove(data) {
    let index = this.indexOf(data);
    if (index === -1) {
      return false;
    } else {
      this.removeAt(index);
    }
  }

  getSize() {
    return this.size;
  }

  isEmpty() {
    if (!this.getSize()) {
      return true;
    }
    return false;
  }

  printList() {
    if (!this.head) {
      console.log("Empty list");
      return;
    }

    let current = this.head;

    while (current !== null) {
      console.log(current.data);
      current = current.next;
    }
  }
}
const myList = new LinkedList();
const myList2 = new LinkedList();
myList.append(8);
myList.append(7);
myList.append(8);
myList.append(7);
myList.remove(8);

myList.printList();
