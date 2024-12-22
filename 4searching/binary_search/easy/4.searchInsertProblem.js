/*
https://leetcode.com/problems/search-insert-position/description/

Given a sorted array of distinct integers and a target value,
 return the index if the target is found. If not, return the index wher
 e it would be if it were inserted in order.
*/

// Brute force
const searchInser0 = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      return i;
    } else if (nums[i] > target) {
      return i;
    }
  }
  return nums.length;
};
console.log("brute force", searchInsert([1, 2, 4, 5, 6, 7], 6));
console.log("brute force", searchInsert([1, 2, 4, 5, 6, 7], 8));

// my solution with BS
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (arr, target) {
  // edge case
  if (arr.length === 0) {
      return 0;
  }

  let left = 0;
  let right = arr.length - 1;
  if (arr[right] < target) {
      return right + 1;
  }
  if(arr[left]> target){
     return left;
  }
  // nums contains distic values sorted in ascending order
  while (left <= right) {
      const mid = left + Math.floor((right - left) / 2);
      if (arr[mid] === target) {
          return mid
      }
      if (arr[mid] > target && arr[mid - 1] < target) {
          return mid
      }

      if (arr[mid] > target && arr[mid - 1] >= target) {
          right = mid - 1;
      }else if (arr[mid] < target) {
          left = mid + 1
      }
  }
  return mid
};

// more readable solution 
const searchInsertOptimal = (nums, target) => {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  /**
   * Insertion Position: The correct insertion position for the target is exactly where left is pointing. Here's why:

    a. If the target is smaller than all elements: left will be 0, which is the correct insertion position at the start of the array.

    b. If the target is larger than all elements: left will be nums.length, which is the correct insertion position at the end of the array.

    c. If the target should be inserted between two elements: left will be pointing to the first element that is greater than the target, which is where the target should be inserted.
   */
  return left; // Insertion index
};

console.log("optimal force", searchInsertOptimal([1, 2, 4, 5, 6, 7], 3));
console.log("optimal force", searchInsertOptimal([1, 2, 4, 5, 6, 7], 8));

// followup -> what if there are duplicate elements
//. If it exists multiple times, return the index of the first occurrence.
// If the target does not exist,
//return the position where it would be inserted to maintain the order.

const searchInsertOptimalModified = (nums, target) => {
  let left = 0;
  let right = nums.length - 1;
  let result = nums.length; // Default to end of array if target is larger than all elements

  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);
    if (nums[mid] >= target) {
      result = mid; // Potential insertion point or first occurrence
      right = mid - 1; // Continue searching left for earlier occurrences
    } else {
      left = mid + 1;
    }
  }
  // If the target is not found, return the insertion index
  return result; // Return the index of the first occurrence or -1 if not found
};

console.log(
  "optimal force modified",
  searchInsertOptimalModified([1, 5, 5, 5, 5, 6, 7], 5)
);
