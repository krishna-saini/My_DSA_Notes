/* eslint-disable linebreak-style */
/*
Upper Bound - smallest index i for which arr[i] > target
Lower Bound - smallest index i for which arr[i] >= target

eg- [ 1,2,2,2,3] LB = 1, UB = 4
eg -
*/

function lowerBound(nums, target) {
  let left = 0;
  let right = nums.length-1;

  while (left <= right) {
      let mid = left + Math.floor((right - left) / 2);
      // condtion for lower bound
      if (nums[mid] >= target) {
        right = mid-1;
      } else {
        left = mid + 1;
      }
  }
  return left;
}


function upperBound(nums, target) {
  let left = 0;
  let right = nums.length-1;

  while (left <= right) {
      let mid = left + Math.floor((right - left) / 2);
      // condtion for upper bount
      if (nums[mid] > target) {
        right = mid-1;
      } else {
        left = mid + 1;
      }
  }

  return left;
}

const arr = [3, 5, 9, 9, 15, 19];

const ub = upperBound(arr, 171);
console.log('The upper bound is the index:', ub);
const lb = lowerBound(arr, 19);
console.log('The lower bound is the index:', lb);
