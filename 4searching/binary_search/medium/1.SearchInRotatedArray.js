/*
https://leetcode.com/problems/search-in-rotated-sorted-array/

There is an integer array nums sorted in ascending order (with distinct values).

Given the array nums after the possible rotation and an integer target,
return the index of target if it is in nums, or -1 if it is not in nums

Input: nums = [4,5,6,7,0,1,2], target = 0
Output: 4

Input: nums = [4,5,6,7,0,1,2], target = 3
Output: -1
*/

// Brute foce O(n)

// Optimised using Binary search as array is sorted
/*
Intuition for Solving the Problem:
Since the array is rotated, it breaks into two sorted subarrays. 
To efficiently search for the target element, you can apply the following strategy:

1. Identify the Sorted Half: 
   During each iteration of the binary search, 
   determine which half of the array is sorted.
   This is possible because, even after rotation, 
   one of the two halves will always be sorted.

   If arr[low] <= arr[mid]: In this case, we identified that the left half is sorted.
   If arr[mid] <= arr[high]: In this case, we identified that the right half is sorted.

2. Determine Which Half to Search: 
   Once you identify the sorted half, 
   you can decide whether the target lies in that half or 
   the other half. Based on that, you adjust your search range, 
   just like in a standard binary search.


*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (arr, target) {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);
    console.log('k', left, right, mid, arr[mid]);
    if (arr[mid] === target) {
      return mid;
    }
    if (arr[left] <= arr[mid]) {
      // left half is sorted
      // check if target exist
      if (arr[left] <= target <= arr[mid]) {
        // discard right half
        right = mid - 1;
      } else {
        // discard left half
        left = mid + 1;
      }
    } else {
      // right half is sorted
      // check if target exist
      if (arr[mid] <= target <= arr[right]) {
        // discard left half
        left = mid + 1;
      } else {
        // discard right half
        right = mid - 1;
      }
    }
  }
  return -1;
};
console.log(search([1, 3], 1));
