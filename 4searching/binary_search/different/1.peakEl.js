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
/*
1. We can observe that a peak element must be part of a bitonic subarray
 (an array that is first increasing and then decreasing or vice versa).
2. We can perform a modified binary search
*/
function findPeakElement(arr) {
    let n = arr.length; // Size of the array
  
    // Edge cases:
    if (n === 1) return 0;
    if (arr[0] > arr[1]) return 0;
    if (arr[n - 1] > arr[n - 2]) return n - 1;
  
    let low = 1,
      high = n - 2;
    while (low <= high) {
        const mid = low + Math.floor((high-low)/2);
  
      // If arr[mid] is the peak:
      if (arr[mid - 1] < arr[mid] && arr[mid] > arr[mid + 1]) return mid;
  
      // If we are in the left:
      if (arr[mid] > arr[mid - 1]) low = mid + 1;
      // If we are in the right:
      // Or, arr[mid] is a common point:
      else high = mid - 1;
    }
    // Dummy return statement
    return -1;
  }
 

  let arr = [3, 4, 3, 2, 1];
let ans = findPeakElement(arr);
console.log('The peak is at indexsdf:', ans);