/**
 * Retrieves the minimum element in the stack with O(1) TC.
 * Intuition - the top node always contains the min value so that it can be accessed in constant TC.
 * Traders often need to know the lowest price over a specific period to make buy/sell decisions.
 */

/**
 * Function should be a constructor,
 * which means it should use the function keyword instead of an arrow function to properly bind this.
 * So to create a constructor -
 * either use classes (ES6)
 * or use function definition.
 * Don't use arrow functions.
 */

class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
      this.min = null; // Add min to track minimum up to this node
    }
  }
  
  class MinStack {
    constructor() {
      this.topNode = null;
      this.size = 0;
    }
  
    push(value) {
      const newNode = new Node(value);
      // if there is no stack
      if (!this.topNode) {
        this.topNode = newNode;
        newNode.min = value;
      } else {
        newNode.next = this.topNode;
        newNode.min = Math.min(value, this.topNode.min); // idea is to assign topNode the min value
        this.topNode = newNode;
      }
      this.size++;
      return this.size;
    }
  
    pop() {
      if (!this.topNode) {
        throw new Error('Stack is empty. Cannot pop.');
      }
      const output = this.topNode;
      this.topNode = this.topNode.next;
      this.size--;
      return output.value;
    }
  
    peek() {
      if (!this.topNode) {
        throw new Error('Stack is empty.');
      }
      return this.topNode.value;
    }
  
    getMin() {
      if (!this.topNode) {
        throw new Error('Stack is empty.');
      }
      return this.topNode.min;
    }
  }
  
  // Example usage:
  const minStack = new MinStack();
  minStack.push(3);
  minStack.push(5);
  console.log(minStack.getMin()); // 3
  minStack.push(2);
  minStack.push(1);
  console.log(minStack.getMin()); // 1
  minStack.pop();
  console.log(minStack.getMin()); // 2
  minStack.pop();
  console.log(minStack.peek()); // 5
  