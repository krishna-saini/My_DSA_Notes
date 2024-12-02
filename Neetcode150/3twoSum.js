/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function (nums, target) {
    /**
    Brute force
    Outer loop -> 0 to n-2
    inner loop -> 0 to n-1
    if sum of i+j === target, return
  
    TC - O(n^2) SC. - O(1)
     */
  
    /**
     Use hashmap to store each array value with its index
  
     // loop through the array
     // find complement = target - arr[i]
  
     // if complement exits , it means you got your ans
  
     // if not exist, add it in hashmap
      */
  
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
  