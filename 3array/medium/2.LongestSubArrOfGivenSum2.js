/**
 * Longest Subarray with given Sum K(Positives) using two pointer
  Problem Statement: Given an array and a sum k,
 we need to print the length of the longest subarray that sums to k.
 // but two pointer wont work for array with negetive numbers as 
// the sum of array may become always < k due to negetive numbers.
 */

function longestSubarrayWithSum(nums, targetSum) {
  let left = 0;
  let currentSum = 0;
  let maxLength = 0;

  for (let right = 0; right < nums.length; right++) {
      currentSum += nums[right];

      // Shrink the window if the current sum exceeds the target sum
      while (currentSum > targetSum) {
          currentSum -= nums[left];
          left++;
      }

      // Check if the current sum equals the target sum and update max length
      if (currentSum === targetSum) {
          maxLength = Math.max(maxLength, right - left + 1);
      }
  }

  return maxLength;
}

// Example usage:
const nums = [1, 2, 3, 7, 5];
const targetSum = 12;
const result = longestSubarrayWithSum(nums, targetSum);
console.log("Length of the longest subarray with sum", targetSum, "is:", result);

// TC - O(2N)
//Reason: The outer while loop i.e. the right pointer can move up to index n-1
//(the last index). Now, the inner while loop i.e. the left pointer can move up to 
//the right pointer at most. So, every time the inner loop does not
// run for n times rather it can run for n times in total. it will be adding to the 
// outer loop. So,
// the time complexity will be O(2*N) instead of O(N2).






