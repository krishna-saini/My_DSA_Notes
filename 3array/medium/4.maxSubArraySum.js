/**
 * Given an integer array nums, find the 
subarray
 with the largest sum, and return its sum.
 https://leetcode.com/problems/maximum-subarray/description/
 */

// Brute force
// O(n^2) O(1)

// using cumilitive sum (prefix sum)
// create an array of prefix sum of given array
// . prefixSum[i] = arr[0] + arr[1] + ... + arr[i]
// sum of el from i to j = sum(i, j) = prefixSum[j] - prefixSum[i-1]
// max sum(i,j)  = max (prefixSum[j] - prefixSUm[i-1])
// it means find the maximum difference between two elements of prefix sum
// it means track maxPrefixSum and minPrfixSum.
// if(minPrefixSum <0) , it will further maximise the sum(i,j), hence
// update minPrefixSum if it is <0
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArrayUsingPrefixSum = function (nums) {
  let prefixSum = 0;
  let minPrefixSum = 0; // keep it at 0 as we will update it if prefixSum goes below 0
  let maxPrefixSum = -Infinity;
  let minPrefixSumIndex = -1;
  // Variables to keep track of the starting and ending indices of the max subarray
  let start = 0;
  let end = 0;

  /**
   * The minimum prefix sum (minPrefixSum) is the smallest sum of any subarray that
   * starts from the beginning and ends somewhere before the current index.
   */

  for (let i = 0; i < nums.length; i++) {
    prefixSum += nums[i]; // track prefix sum upto the ith index

    // track maxPrefix sum
    // minPrefix sum keep track of min prefix sum encountered so far till ith index
    // followup question -
    // return that subarray which has max sum and is of max length is multiple such sub arr found

    // Check if we found a new maximum subarray sum or
    // a subarray of the same sum but with longer length
    if (
      prefixSum - minPrefixSum > maxPrefixSum ||
      (prefixSum - minPrefixSum === maxPrefixSum &&
        i - minPrefixSumIndex + 1 > end - start)
    ) {
      maxPrefixSum = prefixSum - minPrefixSum;
      start = minPrefixSumIndex + 1;
      end = i;
    }

    // track minprefixSum
    if (prefixSum < minPrefixSum) {
      minPrefixSum = prefixSum;
      minPrefixSumIndex = i;
    }
  }

  const maxSubArr = nums.slice(start, end + 1);
  return { maxPrefixSum, maxSubArr };
};

// console.log(maxSubArrayUsingPrefixSum([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // Output: 6
console.log('2', maxSubArrayUsingPrefixSum([1, 2, 3, -6, 6])); // Output: 6

// TC =  O(n) = SC

// optimal soultion using Kadane algo

/*
1. The intuition of the algorithm is not to consider the
 subarray as a part of the answer if its sum is less than 0.
2.  A subarray with a sum less than 0 will always reduce our answer and so this type of
subarray cannot be a part of the subarray with maximum sum.


The core idea of Kadane's algorithm is to decide at each element of the array whether to:

Include the element in the existing subarray or
Start a new subarray with the current element as its sole member.
This decision is based on whether adding the current element increases 
the subarray sum or if starting fresh with the current element gives a better result.


The key insight of Kadane's algorithm is to iterate through the array while keeping track of two things:

The maximum sum of any subarray ending at the current position.
The maximum sum encountered so far.
*/

const maxSubArrSum = (nums) => {
  let maxSubArrSum = -Infinity;
  let maxPrefixSum = 0;

  if (nums.length === 0) return -1; // check with interviewer about this

  for (let i = 0; i < arr.length; i++) {
    // The maximum sum of any subarray ending at the current position.
    maxPrefixSum = Math.max(arr[i], maxPrefixSum + arr[i]);

    //The maximum sum encountered so far.
    maxSubArrSum = Math.max(maxSubArrSum, maxPrefixSum);

    // solution for 1st follow up
    //if (maxSubArrSum < 0) maxSubArrSum = 0;
  }
  return maxSubArrSum;
};

const arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

const maxSum = maxSubArrSum(arr);
console.log('The maximum subarray sum is via kadae: ' + maxSum);

// Follow up question
// 1. Take empty subarray into consideration too , in that case we have to compare with 0

// return the subArray too
