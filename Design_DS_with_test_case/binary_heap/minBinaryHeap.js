/**
 * min binary heap -
 * parent nodes are always smaller than child nodes
 * root is the smallest node
 */

/**
 * TC for insertion/deletion - O(logN)
 * in worst case
 * as , the bubble up need to perform at each level for insertion 
 * as  the bubbledown operation might need to perform comparisons and swaps at each level from the root down to a leaf for deletion
 * 
 * SC is O(N) 
 * 
 * N is number of nodes
 */

class MinHeap {
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
      if (value.freq >= parent.freq) break;
      this.values[idx] = parent;
      this.values[parentIndex] = value;
      // update the idx to parent index
      idx = parentIndex;
    }
  };

  /**
   * Extract first occurance of max value
   */
  extractMin = () => {
    if (this.values.length === 0) {
      throw new Error('heap is empty');
    }
    const firstMin = this.values[0];
    this.values[0] = this.values[this.values.length - 1];
    this.#bubbleDown();
    this.values.length = this.values.length - 1;
    // console.log("extracting min", firstMin)
    return firstMin;
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
        this.values[n].freq < this.values[leftChildIndex].freq &&
        this.values[n].freq < this.values[rightChildIndex].freq
      ) {
        break;
      }

      const smallerFreqChildIndex =
        this.values[leftChildIndex].freq < this.values[rightChildIndex].freq
          ? leftChildIndex
          : rightChildIndex;

      // swap
      const temp = this.values[smallerFreqChildIndex];
      this.values[smallerFreqChildIndex] = this.values[n];
      this.values[n] = temp;

      // update n
      n = smallerFreqChildIndex;
    }
  };

  size() {
    return this.values.length;
  }
}

const minHeap = new MinHeap();

minHeap.insert({ num: 4, freq: 1 });
minHeap.insert({ num: 1, freq: 1 });
minHeap.insert({ num: -1, freq: 2 });

minHeap.extractMin();
console.log(minHeap.values);
minHeap.insert({ num: 2, freq: 2 });
console.log(minHeap.values);

minHeap.extractMin();

minHeap.insert({ num: 3, freq: 1 });
minHeap.extractMin();
console.log(minHeap.values);
