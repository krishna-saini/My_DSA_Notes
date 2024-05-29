class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}
class DoublyLL {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    const newNode = newNode(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  /**
   * TC - O(1)
   */
  pop() {
    if (!this.head) return undefined;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      // in single LL , we had to traverse whole LL O(n)\
      const secondLastNode = this.tail.prev;
      this.tail.prev = null;
      secondLastNode.next = null;
      this.tail = secondLastNode;
    }
    this.length--;
    return this;
  }

  shift() {
    if (!this.head) return undefined;
    const newHead = this.head.next; // get new head
    newHead.prev = null;
    this.head.next = null; // bisect the head
    this.head = newHead;
    this.length--;
    return this;
  }

  unshift(val) {
    const newHead = new Node(val);
    this.head.prev = newHead;
    newHead.next = this.head;
    this.head = newHead;
    this.length++;
    return this;
  }

  get(index) {
    // you have to loop only unlike arr
    if (!this.head) return undefined;
    if (index < 0 || index >= this.length) return undefined;
    let counter = 0;
    let current = this.head;
    while (counter !== index) {
      current = current.next;
      counter++;
    }

    return current;
  }

  /**
   * change the value of a node based on its index in the LL.
   * it is meant to change value of existing node.
   * it accepts a value and an index
   * use the get function to find the specific node
   * if node not found, return undefined/false;
   * else change the value of that node and return the list/true
   */
  set(val, index) {
    const requiredNode = this.get(index);
    if (!requiredNode) return undefined;
    requiredNode.val = val;
    return this;
  }

  insert(val, index) {
    if (!val || !index || index < 0 || index > this.length) {
      return undefined;
    }
    if (index === 0) {
      return this.unshift(val);
    }
    if (index === this.length) {
      return this.push(val);
    }
    const newNode = new Node(val);
    const afterNode = this.get(index);
    const prevNode = this.get(index - 1);
    afterNode.prev = newNode;
    prevNode.next = newNode;
    newNode.prev = prevNode;
    newNode.next = afterNode;
    this.length++;

    return this;
  }

  delete(index) {
    if (!index || index < 0 || index > this.length) {
      return undefined;
    }
    if (index === 0) return this.shift();
    if (index === this.length) return this.pop();

    const deletedNode = this.get(index);
    deletedNode.prev.next = deletedNode.next;
    deletedNode.next.prev = deletedNode.prev;
    this.length--;
    return this;
  }

  reverse() {
    if (!this.head) return undefined;
    let prevNode = null;
    let nextNode = null;
    let currentNode = this.head;
    while (currentNode) {
      nextNode = currentNode.next;

      currentNode.next = prevNode;
      currentNode.prev = nextNode;

      prevNode = currentNode;
      currentNode = nextNode;
    }

    // swap head and tail
    this.tail = this.head;
    this.head = prevNode;

    return this;
  }
}

// testing
const list = new DoublyLL();
list.push('krishna'); // O(1)
list.push('enjoying');
list.push('learning DSA');
// list.pop();   // O(1)
// list.unshift("The")  // O(1)
// list.shift();  // O(1)

list.set('very much', 2); // O(n)
list.insert('learning DSA', 2); // O(n)
list.delete(1); // O(n)
list.reverse(); // O(n)
console.log('krishna', list);
console.log('krisna get ', list.get(3));
