/*
https://leetcode.com/problems/search-insert-position/description/

Given a sorted array of distinct integers and a target value,
 return the index if the target is found. If not, return the index wher
 e it would be if it were inserted in order.
*/

// Brute force
const searchInsert = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      return i;
    } else if (nums[i] > target) {
      return i;
    }
  }
  return nums.length;
};
console.log('brute force', searchInsert([1, 2, 4, 5, 6, 7], 6));
console.log('brute force', searchInsert([1, 2, 4, 5, 6, 7], 8));

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
  // If the target is not found, return the insertion index
  return left; // Insertion index
};

console.log('optimal force', searchInsertOptimal([1, 2, 4, 5, 6, 7], 3));
console.log('optimal force', searchInsertOptimal([1, 2, 4, 5, 6, 7], 8));

// followup -> what if there are duplicate elements
//. If it exists multiple times, return the index of the first occurrence.
// If the target does not exist,
//return the position where it would be inserted to maintain the order.

const searchInsertOptimalModified = (nums, target) => {
  let left = 0;
  let right = nums.length - 1;
  let result = -1; // To store the index of the first occurrence

  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);
    if (nums[mid] === target) {
      result = mid; // Update the result with the current position
      right = mid - 1; // Continue searching to the left for the first occurrence
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  // If the target is not found, return the insertion index
  return result; // Return the index of the first occurrence or -1 if not found
};

console.log(
  'optimal force modified',
  searchInsertOptimalModified([1, 5, 5, 5, 5, 6, 7], 5)
);
