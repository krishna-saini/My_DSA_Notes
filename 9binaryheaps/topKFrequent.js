/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {

    // first find freq map
    let freqMap = new Map();
    for(let num of nums){
        // freqMap.set(num, freqMap.get(num)?freqMap.get(num)+1: 1)
        freqMap.set(num, (freqMap.get(num) || 0) + 1);
        // freqMap[el] = freqMap[el] ? freqMap[el]+1 : 1; // for object

    }

    console.log(freqMap)
const minHeap = new MinHeap();
    for(const [num,freq] of freqMap){
         // inset {num,freq} in a min Heap
         minHeap.insert({num, freq});

// as soon as size of min Heap > k, extract out the min
    // so that the minHeap have top k max element only
    if(minHeap.size() > k){
        minHeap.extractMin()
    }
         
    }

    // now minHeap has only top k elements 
    // loop again and strore them in resutl
    const result = [];
    while(minHeap.size()>0){
        result.push(minHeap.extractMin().num)
    }
return result;    
};

// define minHEap


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



  // TC - O(n) for freqmap + O(n1)*[O(logK)] (building heap of k elements) + O(klogk)(extracting elements from heap)
  // worst case - O(n)+O(nlogk)+O(klogk) ~= O(nlogk) 

  // SC - O(n1) + O(k)(for building min heap of k element) + O(k)(for result) 
  // n1-> unique element in array