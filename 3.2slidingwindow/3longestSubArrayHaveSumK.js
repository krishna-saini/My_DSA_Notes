/**
 * Problem Statement: Given an array and a sum k, we need to print the length of the longest subarray that sums to k.
 *
 * https://takeuforward.org/arrays/longest-subarray-with-sum-k-postives-and-negatives/
 */

// Brute force
const getLongestSubarray = (arr, k) => {
  let maxLength = 0;

  for (let start = 0; start < arr.length; start++) {
    let sum = 0;
    for (let end = start; end < arr.length; end++) {
      sum = sum + arr[end];
      if (sum === k) {
        maxLength = Math.max(maxLength, end - start + 1);
      }
    }
  }
  return maxLength;
};

let a = [0, 1, 1];
let k = 2;
let len = getLongestSubarray(a, k);
console.log("The length of the longest subarray via brute force is:", len);
// O(n^2)

// if we assume all are positives number, then we can track this using two pointer & sliding window
// take two pointer start & end
// loop through the array with pointer end
// keep adding each value to the sum
// if sum < k, end++
// if sum ===k , update maxLendght
// while sum > k, keep subtracting start index value from sum

const getLongestSubarray2 = (arr, k) => {
  let start = 0;
  let maxLength = 0;
  let sum = 0;

  for (let end = 0; end < arr.length; end++) {
    sum = sum + arr[end];

    if (sum === k) {
      maxLength = Math.max(maxLength, end - start + 1);
    }

    while (sum > k) {
      sum = sum - arr[start];
      start++;
    }
  }

  return maxLength;
};

console.log(
  "The length of the longest subarray is:",
  getLongestSubarray2([-1, 2, 1], 2)
);

// but two pointer wont work for array with negetive numbers as
// the sum of array may become always < k due to negetive numbers.
// two pointer  rely on the monotonic increase of the cumulative sum

// solution for negetive number is to use hashmap
// We use a HashMap to store these cumulative sums as keys and their corresponding indices as values.
// The Core Idea: If we find that the current cumulative sum minus k exists in our HashMap, it means we've found a subarray with sum k.

// Cumulative Sum Property: If at any point in the array, the cumulative sum is sum, and we want to find a subarray with sum k, then we need to find a previous point where the cumulative sum was sum - k.

// then run a loop
// keep doing sum
// [4,-1,-2,3,-3], k=1
// if sum is not found in hashmap, add it with its index
// cumulative hashmap ={0-> -1, 4->0, 3->1, 1->2, 4->3, 1->4}
// now if cumulative sum is sum, then look for sum-k in hashmap as it will store the starting index of the desired subArray

const getLongestSubarray3 = (arr, k) => {
  const map = new Map();
  /**
   *  Assume the given array is [3, -3, 1, 1, 1] and k is 3.
   * Now, for index 0, we get the total prefix sum as 3, and k is also 3.
   * So, the prefix sum of the remove-part should be x-k = 3-3 = 0.
   * Now, if the value is not previously set for the key 0 in the map,
   * we will get the default value 0 for the key 0 and we will add 0 to our answer.
   * This will mean that we have not found any subarray with sum 3 till now.
   * But this should not be the case as index 0 itself is a subarray with sum k i.e. 3.
   * So, in order to avoid this situation we need to set the value of 0 as -1 on the map beforehand.
   */
  map.set(0, -1);
  let sum = 0;
  let maxLen = 0;

  for (let end = 0; end < arr.length; end++) {
    sum = sum + arr[end];

    // update hashmap with sum& index is sum is not present
    // If we haven't seen this sum before, add it to the map
    if (!map.has(sum)) {
      map.set(sum, end);
    }

    // Check if we've seen the sum - k before
    // If we have, it means the subarray between that point and now sums to 
    const remainingSum = sum - k;
    if (map.has(remainingSum)) {
      startIndex = map.get(remainingSum);
      maxLen = Math.max(maxLen, end - startIndex);
    }
  }
  return maxLen;
};
