class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

/**
 * In a stack implemented using a linked list,
 * the top node should have a reference to the next node,
 * which would be the node just below it (the "next" node).
 * The bottom node (i.e., the node that was added first and is at the bottom of the stack)
 * should have next set to null, indicating that there are no nodes below it.
 */
export default class Stack {
  constructor() {
    // points from top to bottom
    this.top = null;
    this.bottom = null;
    this.size = 0;
  }

  push(value) {
    const newNode = new Node(value);
    if (!this.top) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      newNode.next = this.top;
      this.top = newNode;
    }
    this.size++;

    // return this;
  }

  pop() {
    // check if it is empty stack
    if (!this.top) {
      throw new Error('Stack is empty. Cannot pop.');
    }
    const output = this.top;
    // check if there is only one node
    if (!this.top.next) {
      this.top = null;
      this.bottom = null;
    } else {
      this.topNode = this.topNode.next; // Detach the top node by moving the topNode reference to the next node
    }

    this.size--;

    return output.value;
  }

  isEmpty() {
    return this.top === null;
  }

  peek() {
    return this.top.value;
  }

  getSize() {
    return this.size;
  }
}
