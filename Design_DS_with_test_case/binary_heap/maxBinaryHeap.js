/**
 * max binary heap -
 * parent nodes are always greater than child nodes
 * root is the largest node
 */

class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  /**
   * Insert -
   * push the value in the array and compare it with its parent
   * if pushed value > parent, bubble it up to correct spot
   */
  insert = (value) => {
    this.values.push(value);
    this.#bubbleUpLastElement();
    return this.values;
  };

  #bubbleUpLastElement = () => {
    let idx = this.values.length - 1;
    const value = this.values[idx];
    while (idx > 0) {
      // bubble up -> swap
      let parentIndex = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIndex];
      if (parent >= value) break;
      this.values[idx] = parent;
      this.values[parentIndex] = value;
      // update the idx to parent index
      idx = parentIndex;
    }
  };

  /**
   * Extract first occurance of max value
   */
  extractMax = () => {
    if (this.values.length === 0) {
      throw new Error('heap is empty');
    }
    const firstMax = this.values[0];
    this.values[0] = this.values[this.values.length - 1];
    this.#bubbleDown();
    this.values.length = this.values.length - 1;
    return firstMax;
  };

  /**
   * clarifying question -> what if there are multiple elements have same value.
   * what if no such value found in heap
   *
   * sink down/ extract max/ bubble down/cascade down/ heapify down
   * notions -
   * replaced the removed node with the last node of arr and then bubble down
   * means compare this last node(at its new location) with its two children
   * if it is > both, it is at correct place
   * else replace it with max of its parent
   * repeat the process
   *
   * return removed index value
   */
  remove = (value) => {
    // find removedindex
    const removedIndex = this.values.findIndex((el) => el === value);
    if (removedIndex === -1) {
      return null;
    }
    this.values[removedIndex] = this.values[this.values.length - 1];
    this.values.length = this.values.length - 1;
    // bubble down
  };

  #bubbleDown = () => {
    let n = 0;

    while (true) {
      const leftChildIndex = 2 * n + 1;
      const rightChildIndex = 2 * n + 2;
      // check that left and right child index are in bound
      if (
        leftChildIndex > this.values.length - 1 ||
        rightChildIndex > this.values.length - 1
      ) {
        break;
      }

      if (
        this.values[n] > this.values[leftChildIndex] &&
        this.values[n] > this.values[rightChildIndex]
      ) {
        break;
      }

      const largerChildIndex =
        this.values[leftChildIndex] > this.values[rightChildIndex]
          ? leftChildIndex
          : rightChildIndex;

      // swap
      const temp = this.values[largerChildIndex];
      this.values[largerChildIndex] = this.values[n];
      this.values[n] = temp;

      //   [this.values[largerChildIndex], this.values[n]] = [this.values[n], this.values[largerChildIndex]];

      // update n
      n = largerChildIndex;
    }
  };

  /**
   * remove all instances of given value
   */
  removeAll = (value) => {};
}

const maxHeap = new MaxBinaryHeap();
maxHeap.insert(41);
maxHeap.insert(39);
maxHeap.insert(33);
maxHeap.insert(18);
maxHeap.insert(27);
maxHeap.insert(12);
maxHeap.insert(55);
console.log(maxHeap.values);
maxHeap.extractMax();
console.log(maxHeap.values);
maxHeap.extractMax();
console.log(maxHeap.values);
