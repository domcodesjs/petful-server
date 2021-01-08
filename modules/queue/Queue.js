class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Queue {
  constructor() {
    // Set initial data.
    this.first = null;
    this.last = null;
  }

  enqueue(data) {
    const node = new Node(data);

    if (this.first === null) {
      this.first = node;
    }

    if (this.last) {
      this.last.next = node;
    }

    this.last = node;
  }

  dequeue() {
    // Remove some data from the queue.
    if (this.first === null) {
      return;
    }

    const node = this.first;
    this.first = this.first.next;

    if (node === this.last) {
      this.last = null;
    }

    return node.data;
  }

  show() {
    // Return the next item in the queue.
    if (this.first === null) {
      return;
    }

    return this.first.data;
  }

  all() {
    // Return all items in the queue.
    let arr = [];
    let node = this.first;

    while (node !== null) {
      arr.push(node.data);
      node = node.next;
    }

    return arr;
  }
}

module.exports = Queue;
