/**
 * https://leetcode.com/problems/top-k-frequent-elements/submissions/1468837603/
 * Input: nums = [1,1,1,2,2,3], k = 2
   Output: [1,2]
 */

// using O(nlog n ) TC
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
    // Edge case
    if(k === 0) return [];
    if (nums.length === k) return nums;
  
    // Step 1: Create frequency map
    const map = new Map(); // TC: O(1), SC: O(u) where u is the number of unique elements
    for (let num of nums) {
      // TC: O(n)
      map.set(num, (map.get(num) || 0) + 1);
    }
  
    // Step 2: Convert map to array and sort
    const sortedEntries = Array.from(map).sort((a, b) => b[1] - a[1]);
    // TC: O(u log u) for sorting, SC: O(u) for the new array 
  
    // Step 3: Extract top k elements
    return sortedEntries.slice(0, k).map(([num]) => num);
    // TC: O(k), SC: O(k) for the result array
};
  
// Overall Time Complexity: O(n + u log u)
// Worst case (all elements unique): O(n log n)
// Overall Space Complexity: O(u + k)
// Worst case (all elements unique): O(n + k)
  

// TODO: optimise its TC

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
  const freqMap = new Map();
  const bucket = new Array(nums.length + 1); // +1 because frequency can be from 0 to nums.length
  const result = [];

  // nums [1,1,1,1, 2,2,3, 4, 5,5], k = 2
  // Build frequency map
  for (let num of nums) { // O(n)
      freqMap.set(num, (freqMap.get(num) || 0) + 1); // O(1)
  }

  // freqMap - {1:4, 2:2, 3:1, 4:1, 5:2}
  // we still want an order in it, one way is sorting which is O(nlogn)
  // else if somehow we can map this frequMap to an array
  // where the value will be indices of that arr and keys will be array num
  for (const [num, freq] of freqMap) { // O(n) in worst case
      if (!bucket[freq]) {
          bucket[freq] = [];
      }
      bucket[freq].push(num); // O(1)
  }

  // bucket = [_, [3,4], [2,5],_, [1]]
  //so now we have to fetch top K elements out of this bucket
  for (let i = bucket.length - 1; i >= 0; i--) { // O(n) in worst case
      if (bucket[i]) {
          result.push(...bucket[i]); // O(1) amortized
          if (result.length >= k) {
              // slice it too as we may end up more elements in result while pushing
              return result.slice(0, k); // O(k)
          }
      }
  }

  return result; // In case k is larger than the number of unique elements
};

/**
* Time Complexity: O(n)
* - Building frequency map: O(n)
* - Populating bucket: O(n) in worst case (when all elements are unique)
* - Collecting results: O(n) in worst case + O(k) for slicing
* Overall, it's linear time as we go through the array at most a constant number of times.
*
* Space Complexity: O(n)
* - freqMap: O(n) in worst case (when all elements are unique)
* - bucket: O(n) as its length is at most nums.length + 1
* - result: O(k) which is bounded by O(n)
* 
* Note: This algorithm is particularly efficient for large datasets with many duplicates,
* as it avoids the need for sorting (which would be O(n log n)).
*/