function binarySearchIteration(nums, target) {
  let n = nums.length; // size of the array
  let low = 0,
    high = n - 1;

  // Perform the steps:
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (nums[mid] === target) return mid;
    else if (target > nums[mid]) low = mid + 1;
    else high = mid - 1;
  }
  return -1;
}

function binarySearchRecursion(nums, low, high, target) {
  if (low > high) return -1; // Base case.

  // Perform the steps:
  let mid = Math.floor((low + high) / 2);
  if (nums[mid] === target) return mid;
  else if (target > nums[mid])
    return binarySearchRecursion(nums, mid + 1, high, target);
  return binarySearchRecursion(nums, low, mid - 1, target);
}

function searchRecursion(nums, target) {
  return binarySearch(nums, 0, nums.length - 1, target);
}

let a = [3, 4, 6, 7, 9, 12, 16, 17];
let target = 6;
console.log("binarySearchIteration", binarySearchIteration(a, target));
console.log("The target is not present.", searchRecursion(a, target));
