/**
 * https://leetcode.com/problems/3sum/description/
 * @param {number[]} nums
 * @return {number[][]}
 *
 * Time Complexity: O(n^2) + O(nlogn)
 * Space Complexity: O(n) (Map) + O(n)(output array)
 */
const threeSum = function (nums) {
    // Sort the array first to save space complexity of using a hashmap
    nums.sort((a, b) => a - b); // O(n log n)
    const myMap = new Map();
  
    for (let i = 0; i < nums.length - 2; i++) {
      // O(n)
      if (i > 0 && nums[i] === nums[i - 1]) continue;
  
      const x = nums[i];
      const twoSumResult = twoSum(nums, i + 1, -x); // O(n)
  
      for (const [y, z] of twoSumResult) {
        const key = [x, y, z].join(",");
        if (!myMap.has(key)) {
          myMap.set(key, true);
        }
      }
    }
  
    return Array.from(myMap.keys()).map((str) => str.split(",").map(Number));
};
  
/**
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */
const twoSum = (nums, start, target) => {
    let left = start;
    let right = nums.length - 1;
    const result = [];
  
    while (left < right) {
      // O(n)
      const sum = nums[left] + nums[right];
  
      if (sum === target) {
        result.push([nums[left], nums[right]]);
        // skip repeated char in order to prevent duplicates
        while (left < right && nums[left] === nums[left + 1]) left++;
        while (left < right && nums[right] === nums[right - 1]) right--;
  
        left++;
        right--;
      } else if (sum < target) {
        left++;
      } else {
        right--;
      }
    }
  
    return result;
};
  


// cleaner code above 
/**
 * https://leetcode.com/problems/3sum/description/
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum2 = function (nums) {
    // Sort the array first to save space complexity of using a hashmap
    nums.sort((a, b) => a - b);
    const result = [];
  
    for (let i = 0; i < nums.length - 2; i++) {
      // Skip duplicates for the first element
      /**
         If we've already processed a particular number as our first element, we don't need to process it again if it appears consecutively in the sorted array.
         We skip duplicates at the beginning  for first el;
          */
      if (i > 0 && nums[i] === nums[i - 1]) continue;
  
      let left = i + 1;
      let right = nums.length - 1;
  
      while (left < right) {
        const sum = nums[i] + nums[left] + nums[right]; // three some
  
        if (sum === 0) {
          result.push([nums[i], nums[left], nums[right]]);
  
          // Skip duplicates for the second and third elements
          // if you observed same left again immediately after finding 0,
          // udpate left until you get unique left
          while (left < right && nums[left] === nums[left + 1]) left++;
          while (left < right && nums[right] === nums[right - 1]) right--;
  
          left++;
          right--;
        } else if (sum < 0) {
          left++;
        } else {
          right--;
        }
      }
    }
  
    return result;
};
  
console.log(threeSum([-2, -1, -1, -1, 0, 0, 1, 1, 2]));
  