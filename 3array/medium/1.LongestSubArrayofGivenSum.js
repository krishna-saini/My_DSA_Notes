/**
 * Longest Subarray with given Sum K(Positives)
  Problem Statement: Given an array and a sum k,
 we need to print the length of the longest subarray that sums to k.
 */

// Brute force

const longestSubArrOfGivenSum = (arr, k) => {
  let maxLen = 0;
  // loop through array
  for (let i = 0; i < arr.length; i++) {
    let sum = 0;
    // loop again to track sum of sub arrays
    for (let j = i; j < arr.length; j++) {
      sum += arr[j];
      if (sum === k) {
        // update maxLen
        // j-i+1 is length of the subarray in consideration
        maxLen = Math.max(maxLen, j - i + 1);
      }
    }
  }
  return maxLen;
};

console.log(longestSubArrOfGivenSum([1, 2, 3, 4, 2, -1, 1], 6));
// ans should be 4[4, 2, -1, 1]

// TC O(n^2)
// SC O(1)

// optimise solution -
// use Hashmap to track preSum of all the elements upto the index

const longestSubArrOfGivenSumOptimal = (arr, k) => {
  let map = new Map();
  let maxLen = 0;
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    if (!map.has(sum)) {
      map.set(sum, i); //storing sum with its index
    }
    if (sum === k) {
      // current length of subarray = i+1
      maxLen = Math.max(maxLen, i + 1);
    }

    const remaining = sum - k;
    // check if remaining exists in map
    if (map.has(remaining)) {
      // if present , then updte maxLen
      // length of subarray which has sum = k is 
      //  i- map.get(remaining)
      maxLen = Math.max(maxLen, i- map.get(remaining));
    }
  }
  return maxLen;
};
console.log(longestSubArrOfGivenSumOptimal([1, 2, 3, 4, 2, -1, 1], 6));

// with this optimal apporach using map
// TC - O(n)  // if you use object in place of map, 
// the TC may increase as order of elements in object is not 
// predictable/maintained.
// SC - we may use whole length of array to store the sum, = O(1)

// can we futher optimise SC
// Yes if we have only positive and/or zeroes in array, then
// we can use two pointer method to make SC O(1)

// but it wont work for array with negetive numbers as 
// the sum of array may become always < k due to negetive numbers.
// try dry running two pointer on [-1,-1,10] & k=0;
