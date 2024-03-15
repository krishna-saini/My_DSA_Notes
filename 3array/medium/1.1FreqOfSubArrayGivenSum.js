/*
560. Subarray Sum Equals K
Given an array of integers nums and an integer k, return the total number of subarrays whose sum equals to k.

A subarray is a contiguous non-empty sequence of elements within an array.
*/

// brute force
// O(n2) O(1)

// optimal using hasmap
// store prefixSum in map with its frequency

const optimal = (arr, k) => {
  let count = 0;
  let sum = 0;
  // It initializes a map (map) to store cumulative sums and their frequencies.
  const map = new Map();
  map.set(0, 1); // Initialize count to track the number of subarrays with sum = k
  /*
  Let’s understand this using an example. Assume the given array is [3, -3, 1, 1, 1] and k is 3. Now, for index 0, we get the total prefix sum as 3, and k is also 3. So, the prefix sum of the remove-part should be x-k = 3-3 = 0. Now, if the value is not previously set for the key 0 in the map, we will get the default value 0 for the key 0 and we will add 0 to our answer. This will mean that we have not found any subarray with sum 3 till now. But this should not be the case as index 0 itself is a subarray with sum k i.e. 3.
So, in order to avoid this situation we need to set the value of 0 as 1 on the map beforehand.
*/

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    let rem = sum - k;
    //Check if rem exists in the map. If it does, it means there exists a
    // subarray ending at the current index whose sum is k. Increment
    // count by the frequency of rem in the map.
    if (map.has(rem)) {
      count += map.get(rem);
    }

    // storing prefixsum with their frequency
    map.set(sum, (map.get(sum) || 0) + 1);

  }
  return count;
};

console.log(optimal([1, 1, 1], 2));
// console.log(optimal([2, -1, 6], 2));
