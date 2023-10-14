class Queue {
  constructor() {
    this.storage = [];
  }

  enqueue(element) {
    this.storage.push(element);
  }

  dequeue() {
    if (!this.storage.length) {
      return "Queue is empty";
    }
    return this.storage.shift();
  }

  front() {
    if (!this.storage.length) {
      return "Queue is empty";
    }
    return this.storage[0];
  }

  isEmpty() {
    return this.storage.length === 0;
  }

  size() {
    return this.storage.length;
  }

  print() {
    let n = 0;
    while (n < this.storage.length) {
      console.log(this.storage[n]);
      n++;
    }
  }
}

const queue = new Queue();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);

queue.dequeue();
queue.print();
