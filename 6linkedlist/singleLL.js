/**
 * A node stores the value and reference to the next node
 */
class Node {
  constructor(val) {
    this.val = val;
    this.next = next;
  }
}

class singlyLL {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length++;
  }

  push(val) {
    // create a new node
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this; // retuns the LL
  }

  pop() {
    if (!this.head) return undefined;
    // we have to find 2nd last element
    // so traverse from HEAD while there is a next
    let current = this.head;
    let newTail = current;
    while (current.next) {
      newTail = current; // new Tail will track one element befor current el
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return current;
  }
}

const list = new singlyLL();
console.log('krishna', list, list.head);
