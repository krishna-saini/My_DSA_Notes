/*
https://leetcode.com/problems/single-element-in-a-sorted-array/description/

You are given a sorted array consisting of only integers where every element 
appears exactly twice, except for one element which appears exactly once.
Return the single element that appears only once.
*/

// Brute force
// loop through array and store freq of each el in map
// TC O(n) SC O(n)

// Linear Search - loop through array and check for the condition
// arr[i-1] === arr[i] or arr[i] === arr[i+1]
// TC O(n) SC O(1)

// handle edge cases like if there is single element only
// if 0th element is the ans , arr[0]!==arr[1]
// if last el is the ans, arr[n-1] !=== arr[n-2]

// Use XOR - as each element appear twice except one
// ans = 0 and then XOR each element
// a^a = 0 & 0^b = b
// TC O(n)

// Using Binary search
// handle above edge case
/*
eg = [1,1,2,2,3,4,4,5,5]
How to check if we are in left half -
1. if current index = even, arr[i] === arr[i+1]
2. if current index = odd, arr[i] === arr[i-1]
(even,odd) -> we are in left halt -> target must be in right half -> eliminate left half

How to check if we are in right half -
1. if current index = even, arr[i] === arr[i-1]
2. if current index = odd, arr[i] === arr[i+1]
(odd,even) -> we are in right halt -> target must be in left half -> eliminate right half
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function (nums) {
    // handle edge cases
    if (nums.length === 1) {
      return nums[0];
    }
    const n = nums.length;
    if (nums[0] !== nums[1]) return nums[0];
    if (nums[n - 1] !== nums[n - 2]) return nums[n - 1];
  
    let left = 0;
    let right = n - 1;
    while (left <= right) {
      const mid = left + Math.floor((right - left) / 2);
      // check id mid is ans
      if (nums[mid] !== nums[mid - 1] && nums[mid] !== nums[mid + 1]) {
        return nums[mid];
      }
  
      // identify left half,
      //(even,odd) & even===odd
      if (
        (mid % 2 === 0 && nums[mid] === nums[mid + 1]) ||
        (mid % 2 === 1 && nums[mid] === nums[mid - 1])
      ) {
        // eliminate left half as ans is in right side
        left = mid + 1;
      }
      //identify right half
      // (odd,even)
      if (
        (mid % 2 === 0 && nums[mid] === nums[mid - 1]) ||
        (mid % 2 === 1 && nums[mid] === nums[mid + 1])
      ) {
        // elimimate right hald
        right = mid - 1;
      }
    }
};

const arr = [1, 1, 2, 3, 3, 4, 4, 8, 8];
console.log(singleNonDuplicate(arr));
  