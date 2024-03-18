/* eslint-disable linebreak-style */
/*
Upper Bound - smallest index i for which arr[i] > target
Lower Bound - smallest index i for which arr[i] >= target

eg- [ 1,2,2,2,3] LB = 1, UB = 4
eg -
*/

function lowerBound(nums, target) {
  let left = 0;
  let right = nums.length;

  while (left < right) {
      let mid = left + Math.floor((right - left) / 2);
      if (nums[mid] < target) {
          left = mid + 1;
      } else {
          right = mid;
      }
  }

  return left;
}


function upperBound(nums, target) {
  let left = 0;
  let right = nums.length;

  while (left < right) {
      let mid = left + Math.floor((right - left) / 2);
      if (nums[mid] <= target) {
          left = mid + 1;
      } else {
          right = mid;
      }
  }

  return left;
}

const arr = [3, 5, 9, 9, 15, 19];

const ub = upperBound(arr, 9);
console.log('The upper bound is the index:', ub);
const lb = lowerBound(arr, 9);
console.log('The lower bound is the index:', lb);
