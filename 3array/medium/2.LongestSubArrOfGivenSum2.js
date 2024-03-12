/**
 * Longest Subarray with given Sum K(Positives + negetives)
  Problem Statement: Given an array and a sum k,
 we need to print the length of the longest subarray that sums to k.
 */

function getLongestSubarray(arr, k) {
  let left = 0;
  let right = 0;
  let maxLen = 0;
  let sum = arr[0];

  while (right < arr.length) {
    // edge case arr = [10,4,5], k = 9
    // keep on trim the sub array if sum >k
    // do it until sum <k or it is no more a subarray
    while (sum > k && left <= right) {
      sum -= arr[left];
      left++;
    }
    // if sum = k, update the maxLen i.e. answer
    if (sum === k) {
      maxLen = Math.max(maxLen, right - left + 1);
    }
    // Move forward the right pointer
    right++;
    if (right < arr.length) {
      sum += arr[right];
    }
  }
  return maxLen;
}

let a = [2, 3, 5, 1, 9];
let k = 10;
let len = getLongestSubarray(a, k);
console.log("The length of the longest subarray having sum = k  is:", len);

// TC - O(2N)
//Reason: The outer while loop i.e. the right pointer can move up to index n-1
//(the last index). Now, the inner while loop i.e. the left pointer can move up to 
//the right pointer at most. So, every time the inner loop does not
// run for n times rather it can run for n times in total. it will be adding to the 
// outer loop. So,
// the time complexity will be O(2*N) instead of O(N2).