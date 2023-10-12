/**
 * FB
 * not sorted array
 * the end elements of array are infinite
 * find the index of the first occurrence of an infinite element
 *
 * input = [-6, 4, 1, 0, 24, -8, infinite, inifinite, infinite, infinite]
 * output = 6
 */

/**
 * Brute Force Approach
 * Iterate through all the elements of arr and look for the first occurrence of infinite element
 * Time Complexity: O(n)
 */

/**
 * using binary search
 */

function findFirstInfiniteElement(arr) {
  if (Array.isArray(arr) === false || arr.length === 0) {
    return -1;
  }

  let start = 0;
  let end = arr.length - 1;
  let ans;
  while (start <= end) {
    let mid = start + Math.floor((end - start) / 2);

    if (arr[mid] === Infinity) {
      //   if (mid === 0 || arr[mid - 1] !== Infinity) {  // if you identify this, best else no problem
      //     return mid;
      //   } else {
      end = mid - 1;
      //   }
    } else {
      start = mid + 1;
    }
    ans = mid;
  }
  return ans;
}
console.log(
  findFirstInfiniteElement([
    -6,
    4,
    1,
    0,
    24,
    -8,
    Infinity,
    Infinity,
    Infinity,
    Infinity,
  ])
);
console.log(findFirstInfiniteElement([]));

// TC: O(log(n))
