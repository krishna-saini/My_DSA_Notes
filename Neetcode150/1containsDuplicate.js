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
 */

/**
 * Keep track of frequency of each element using Map
 * TC - O(n) SC - O(n)
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
  