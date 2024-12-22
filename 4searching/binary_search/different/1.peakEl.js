/**
 * https://leetcode.com/problems/find-peak-element/description/
 * 
 * A peak element is an element that is strictly greater than its neighbors.
 * Given a 0-indexed integer array nums, find a peak element, and return its index. 
 * If the array contains multiple peaks, return the index to any of the peaks.
 * 
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(arr) {
    if(arr.length===1){
        return 0;
    }
    const n = arr.length;
    if(arr[0]>arr[1]) return 0;
    if(arr[n-1]>arr[n-2]) return n-1;
    for(let i= 1;i<n-1;i++){
        if(arr[i]>arr[i-1] && arr[i]>arr[i+1]){
            return i
        }
    }
};


// optimised approach
/**
 * Find a peak element in an array
 * A peak element is strictly greater than its neighbors.
 * We can observe that a peak element must be part of a bitonic subarray
 * (an array that is first increasing and then decreasing or vice versa).
 * We perform a modified binary search to find a peak in O(log n) time.
 *
 * @param {number[]} nums - The input array
 * @return {number} - Index of a peak element
 */
function findPeakElement(nums) {
  const n = nums.length;

  // Edge cases
  if (n === 1) return 0; // Single element is always a peak
  if (nums[0] > nums[1]) return 0; // First element is a peak
  if (nums[n - 1] > nums[n - 2]) return n - 1; // Last element is a peak

  let left = 1;
  let right = n - 2;

  while (left <= right) {
      const mid = left + Math.floor((right - left) / 2);

      // Check if mid is a peak
      if (nums[mid - 1] < nums[mid] && nums[mid] > nums[mid + 1]) {
          return mid;
      }

      // If mid is in an increasing sequence
      if (nums[mid] > nums[mid - 1]) {
          /**
           * In this case, nums[mid-1] < nums[mid] < nums[mid+1]
           * Values are increasing continuously
           * But it needs to decrease eventually as nums[n] = -infinity (conceptually)
           * And we are guaranteed to have a peak
           * This means there is a peak to the right of mid
           */
          left = mid + 1;
      }
      // If mid is in a decreasing sequence or at a common point
      else {
          /**
           * In this case, either:
           * 1. nums[mid-1] > nums[mid] > nums[mid+1] (decreasing sequence)
           * 2. nums[mid-1] > nums[mid] < nums[mid+1] (common point)
           * In both cases, there's guaranteed to be a peak on the left side (including mid-1)
           */
          right = mid - 1;
      }
  }

  // This return should never be reached given the problem constraints
  return -1;
}
 

let arr = [3, 4, 3, 2, 1];
let ans = findPeakElement(arr);
console.log('The peak is at indexsdf:', ans);