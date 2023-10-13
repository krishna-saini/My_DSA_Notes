// Leetcode - https://leetcode.com/problems/two-sum/
/**
 * Given an array(sorted/unsorted) of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.
 */

// Brute Force
function twoSumBruteForce(nums, target) {   // using linear search
    for (let i = 0; i < nums.length; i++) { // TC: O(n)
        for (let j = i + 1; j < nums.length; j++) { // TC: O(n)
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
    throw new Error("No solution found");
}
// TC: O(n^2) SC: O(1)

var twoSum = function(nums, target) { // using hashing
    const numToIndex = {}; // Create a Map to store numbers and their indices

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
console.log(numToIndex, numToIndex[complement])
        // Check if the complement exists in the Map
        if (numToIndex[complement] !== undefined) {
            return [numToIndex[complement], i];
        }

        // Store the current number and its index in the Map
        numToIndex[nums[i]] = i;
    }

    throw new Error("No solution found");
};

console.log(twoSum([1, 2,7,11,15], 9));  //TC: O(n) SC: O(n)

// the same problem can be solved using two pointer approach if the array is sorted with TC: O(n) and SC: O(1)

// the same problem can be solved using binary search if the array is sorted with TC: O(nlogn) and SC: O(1), but this is not the best approach

// Leetcode - https://leetcode.com/problems/two-sum/

// Leetcode - https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/