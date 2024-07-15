/**
 * Given an integer array nums, find the 
subarray
 with the largest sum, and return its sum.
 https://leetcode.com/problems/maximum-subarray/description/
 */

// Brute force
// O(n^2) O(n)

// using cumilitive sum (prefix sum)
// create an array of prefix sum of given array
// . prefixSum[i] = arr[0] + arr[1] + ... + arr[i]
// sum of el from i to j = sum(i, j) = prefixSum[j] - prefixSum[i-1]
// max sum(i,j)  = max (prefixSum[j] - prefixSUm[i-1])
// it means find the maximum difference between two elements of prefix sum
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  // Initialize the prefix sum array and the sum variable
  const prefix = [];
  let sum = 0;

  // Calculate prefix sum array
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    prefix.push(sum);
  }

  // Initialize variables for min prefix sum and max subarray sum
  let minPrefixSum = 0;
  let maxSubArraySum = -Infinity;

  // Find max subarray sum using prefix sum array
  for (let i = 0; i < prefix.length; i++) {
    // Calculate the potential max subarray sum ending at index i
    maxSubArraySum = Math.max(maxSubArraySum, prefix[i] - minPrefixSum);

    // Update the min prefix sum encountered so far
    minPrefixSum = Math.min(minPrefixSum, prefix[i]);
  }

  return maxSubArraySum;
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // Output: 6

// TC = O(n) = SC

// optimal soultion using Kadane algo

/*
1. The intuition of the algorithm is not to consider the
 subarray as a part of the answer if its sum is less than 0.
2.  A subarray with a sum less than 0 will always reduce our answer and so this type of
subarray cannot be a part of the subarray with maximum sum.
*/

const maxSubArrSum = (arr) => {
  let maxSum = -Infinity;
  let sum = 0;
  let start;
  let ansStart = -1;
  let ansEnd = -1;
  if (nums.length === 1) return nums[0];

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    if (sum === 0) {
      start = i;
    }
    // check is sum exceeds maxSUm
    if (sum > maxSum) {
      maxSum = sum;
      //the subarray always starts at the particular index where the sum variable is equal to 0
      ansStart = start;
      //at the ending index, the sum always crosses the previous maximum sum
      ansEnd = i;
    }
    if (sum < 0) {
      sum = 0;
    }

    // solution for 1st follow up
    //if (maxi < 0) maxi = 0;
  }
  return maxSum;
};

const arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

const maxSum = maxSubArrSum(arr);
console.log('The maximum subarray sum is: ' + maxSum);

// Follow up question
// 1. Take empty subarray into consideration too , in that case we have to compare with 0

// return the subArray too
