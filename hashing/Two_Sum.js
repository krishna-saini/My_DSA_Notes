// Leetcode - https://leetcode.com/problems/two-sum/
/**
 * Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.
 */

var twoSum = function(nums, target) {
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

console.log(twoSum([2,7,11,15], 9));