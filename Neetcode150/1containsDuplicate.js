/**
 * Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
 * https://leetcode.com/problems/contains-duplicate/description/
 */

/**
 * Brute force - find each pair & check if they are equal
 * outer loop -> 0 to n-2
 * inner loop -> i+1 to n-1
 *
 * TC - O(n^2)
 * SC - O(1)
 */

/**
 * sort the array and check if next value is same as current value
 * TC - O(nlogn) SC. - O(1)
 * 
 * This solution is particularly useful when:
   1. The input array is very large & Available memory is limited as we dont need a DS that grows with input arry
   2. Modifying the original array is acceptable.
   3. it can be slow for smaller array
 */

/**
 * Keep track of frequency of each element using Map
 * TC - O(n) SC - O(n)
 * 
 * 1. it is helpful if array is not very large
 * 2. does not mofify original array
 */

var containsDuplicate = function (nums) {
    const myMap = new Map(); // SC O(n)
    for (let i = 0; i < nums.length; i++) {
      // TC O(n)
      if (myMap.has(nums[i])) {
        // O(1)
        return true; // Found a duplicate
      } else {
        myMap.set(nums[i], 1); // O(1)
      }
    }
    return false; // No duplicates found
};
  

/**
 * Follow up -
 * How would you solve this if the numbers were coming in as a stream and you needed to report if a duplicate was found at any point?
 * 
 * or
 * 
 * Design a data structure that can efficiently insert elements and check for duplicates in O(1) time for both operations. 
 * for this requirment, we need data in stream form
 */

class DuplicateDetector {
    constructor() {
        this.seen = new Set();
        this.result = [];
    }

    /**
     * @param {number} num
     * @return {boolean} - true if this number is a duplicate, false otherwise
     */
    addNumber(num) {
        if (this.seen.has(num)) {
            return true; // Duplicate found
        }
        this.seen.add(num);
        this.result.push(num)
        return false; // Not a duplicate
    }

    /**
     * @return {number} - number of unique elements seen so far
     */
    getUniqueCount() {
        return this.seen.size;
    }
}

// Example usage:
const detector = new DuplicateDetector();

console.log(detector.addNumber(1)); // false (not a duplicate)
console.log(detector.addNumber(2)); // false
console.log(detector.addNumber(3)); // false
console.log(detector.addNumber(2)); // true (duplicate found)
console.log(detector.addNumber(4)); // false
console.log(detector.getUniqueCount()); // 4