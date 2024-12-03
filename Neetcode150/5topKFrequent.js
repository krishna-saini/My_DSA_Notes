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