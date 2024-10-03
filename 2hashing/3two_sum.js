/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const numToIndex = {}; // Create a Map to store numbers and their indices

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];

        // Check if the complement exists in the Map
        if (numToIndex[complement]) {
            return [numToIndex[complement], i];
        }

        // Store the current number and its index in the Map
        numToIndex[nums[i]] = i;
    }

    throw new Error("No solution found");
};