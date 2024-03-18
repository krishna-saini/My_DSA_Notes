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
