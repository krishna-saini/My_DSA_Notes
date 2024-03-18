/*
https://leetcode.com/problems/search-insert-position/description/

Given a sorted array of distinct integers and a target value,
 return the index if the target is found. If not, return the index wher
 e it would be if it were inserted in order.
*/

// Brute force
var searchInsert = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      return i;
    } else if (nums[i] > target) {
      return i;
    }
  }
  return nums.length;
};
console.log("brute force", searchInsert([1,2,4,5,6,7], 6));
console.log("brute force", searchInsert([1,2,4,5,6,7], 8));

const searchInsertOptimal = (nums, target)=>{
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

  return nums.length; // Insertion index
}

console.log("optimal force", searchInsertOptimal([1,2,4,5,6,7], 6));
console.log("optimal force", searchInsertOptimal([1,2,4,5,6,7], 8));