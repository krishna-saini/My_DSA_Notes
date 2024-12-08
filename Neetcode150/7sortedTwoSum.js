/**
 * Given an sorted array, find two numbers whose sum is equal to the given target.
 * this problem can be solved using hashing too with TC: O(n) and SC: O(n)
 * hence need to use two pointer approach to optimize the space complexity
 * however the two pointer approach will work only if the array is sorted while hashing will work for both sorted and unsorted array
 */
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function (numbers, target) {
    // Edge cases are not explicitly handled as the problem guarantees a solution
  
    // Since the array is sorted and it is mentioned that there will always be an answer,
    // we can use two pointers, one from start and one from end
  
    // If (L+R < target), we need a larger sum, so move left pointer right: L++
    // If (L+R > target), we need a smaller sum, so move right pointer left: R--
  
    let left = 0;
    let right = numbers.length - 1;
  
    while (left < right) {
      const sum = numbers[left] + numbers[right];
      if (sum === target) {
        // Adding 1 to convert from 0-indexed to 1-indexed
        return [left + 1, right + 1];
      } else if (sum > target) {
        right--;
      } else {
        // sum < target
        left++;
      }
    }
  
    // This return is not necessary given the problem constraints,
    // but included for completeness
    return [-1, -1];
};

// Time Complexity: O(n)
// - We traverse the array at most once with the two pointers
// - Each iteration performs constant time operations

// Space Complexity: O(1)
// - We only use two pointers and a constant amount of extra space
// - The output array is not considered in space complexity analysis


// follow up -
// return all such combinations for which the condition satisfy
// return all such unique combinations only

const twoSum2 = (arr, target) => {
  let start = 0;
  let end = arr.length - 1;
  const result = new Set();
  while (start < end) {
    const sum = arr[start] + arr[end];
    if (sum === target) {
      result.add([arr[start], arr[end]].join(","));
      start++;
      end--;
    } else if (sum < target) {
      start++; // move right as array is sorted and lower values are present on left side
    } else {
      end--; // move left as array is sorted and higher values are present on right side
    }
  }
  return Array.from(result).map((str) => str.split(",").map(Number));
};

console.log(twoSum2([1, 1, 4, 4], 5));
// TC - O(n+m) - m is number of unique
// SC - O(n)  becasue of extra DS


// above solution using array only
const twoSum3 = (arr, target) => {
  let left = 0;
  let right = arr.length - 1;
  const result = [];
  while (left < right) {
    // This loop moves the left pointer to the right as long as the current number is the same as the next number.
    while (left < right && arr[left] === arr[left + 1]) left++;
    //  this loop moves the right pointer to the left as long as the current number is the same as the previous number.
    while (left < right && arr[right] === arr[right - 1]) right--;
    const sum = arr[left] + arr[right];
    if (sum === target) {
      result.push([arr[left], arr[right]]);
      left++;
      right--;
    } else if (sum < target) {
      left++; // move right as array is sorted and lower values are present on left side
    } else {
      right--; // move left as array is sorted and higher values are present on right side
    }
  }
  return result;
};

console.log(twoSum([1, 1, 4, 4], 5));