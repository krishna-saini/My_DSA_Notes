/**
 * A node stores the value and reference to the next node
 */
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class singlyLL {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
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

  // remove the node from the beginning
  shift() {
    if (!this.head) {
      return undefined;
    }
    let currentHead = this.head;
    this.head = currentHead.next;
    this.length--;
    return currentHead;
  }

  // adds a node at the starting of the LL
  unshift(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      let currentHead = this.head;
      this.head = newNode;
      this.head.next = currentHead;
    }
    this.length++;
    return this;
  }

  // retrieve a node by its position in the linked list
  // list(2) -> {val: 3, next: next}
  get(index) {
    if (index < 0) return undefined;
    if (index >= this.length) return undefined;
    if (!this.head) return undefined;
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    // 2nd way
    // let ans = currentNode;
    // while(currentNode.next){
    //   currentNode = currentNode.next;
    //   counter++;
    //    if(counter === index){
    //     ans = currentNode;
    //     break;
    //   }
    // }
    // return ans;
    return currentNode;
  }

  /**
   * change the value of a node based on its index in the LL
   * it accepts a value and an index
   * use the get functin to find the specific node
   * if node not found, return undefined/false;
   * else change the value of that node and return the list/true
   */
  set(newValue, index) {
    const requiredNode = this.get(index);
    if (!requiredNode) return false;
    requiredNode.val = newValue;
    return this;
  }

  /**
   * Insert - adding a node to the LL at a specific position
   * accepts a index and a value
   * if index < 0 ||  > this.length, return false
   * if index === this.length, work like push
   */
  insert(newValue, index) {
    if (index < 0 || index > this.length) return false;
      if (index === 0) {
        return this.unshift(newValue);
      }
      if (index === this.length) {
        return this.push(newValue);
      }

    const newNode = new Node(newValue);
    let preNode = this.get(index - 1);
    newNode.next = preNode.next;
    preNode.next = newNode;
    this.length++;
    return this;
  }

  /**
   * remove a node from specific index
   * it accepts a index
   * if index < 0 || index > length, return false
   * if index === length, do pop
   * if index === 0, do shift
   * else remove the node
   */
  remove(index) {
    if (index < 0 || index >= this.length) return false;
    if (index === 0) {
      return this.shift();
    }
    if (index === this.length - 1) {
      return this.pop();
    }

    const preNode = this.get(index - 1);
    const removedNode = preNode.next;
    preNode.next = removedNode.next;

    this.length--;
    return removedNode;
  }

  /**
   * Reverse the LL in place
   */
  reverse() {
    if (!this.head) return undefined;
    let current = this.head;
    let next = null;
    let prev = null;
    while (current) {
      next = current.next;

      current.next = prev;

      prev = current;
      current = next;
  
    }

    // Swap head and tail
    this.tail = this.head;
    this.head = prev;
    return this;
  }
}

const list = new singlyLL();
list.push('Hi');
list.push('there');
list.push('krishna');
list.push('Saini');
// console.log('krishna1', list);
// list.shift();
// console.log('krishna2', list);
// list.unshift('kartik');
console.log('krishna3', list.reverse());
