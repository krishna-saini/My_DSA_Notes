class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

/**
 * In a queue implemented using a linked list, 
 * the front node should have a reference to the next node, 
 * which would be the node just next to it (the "next" node). 
 * The rear node (i.e., the node that was added last and is at the end of the queue) 
 * should have next set to null, indicating that there are no nodes after it.
 */
export default class LinearQueue {
  constructor() {
    this.front = null;
    this.rear = null;
    this.size = 0;
  }

  isEmpty() {
    return this.front === null;
  }

  // Add an element to the end of the queue
  enqueue(value) {
    const newNode = new Node(value);
    if (!this.front) {
      this.front = newNode;
      this.rear = newNode;
    } else {
      this.rear.next = newNode;
      this.rear = newNode;
    }
    this.size++;
    return this;
  }

  // Remove and return the element at the front of the queue
  dequeue() {
    // check if there is not queue
    if (!this.front) {
      throw new Error('Queue is empty. Cannot dequeue.');
    }
    let output = this.front;
    // check if there is only one node
    if (!this.front.next) {
      this.front = null;
    }
    this.front = this.front.next;
    this.size--;

    return output;
  }

  // Return the element at the front without removing it
  peek() {
    if (this.isEmpty()) {
      throw new Error('Queue is empty. Cannot peek.');
    }

    return this.front.value;
  }

  // Get the number of elements in the queue
  getSize() {
    return this.size;
  }
}

const queue1 = new LinearQueue();
queue1.enqueue('Krishna');
queue1.enqueue('Kartik');
queue1.dequeue();
