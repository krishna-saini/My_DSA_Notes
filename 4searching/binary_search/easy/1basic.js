function binarySearch(arr, target) {
  let low = 0;
  let high = arr.length - 1;
  let result = -1;

  while (low <= high) {
    let mid = low + Math.floor((high - low) / 2); // this is done to avoid overflowing that may occur if we do mid = high+ low/2

    // Check if the target is found at the mid index
    if (arr[mid] === target) {
      result = mid; // Update the result with the current position
      high = mid - 1; // Continue searching to the left for the first occurrence
    } else if (target < arr[mid]) {
      high = mid - 1; // Search in the left half
    } else {
      low = mid + 1; // Search in the right half
    }
  }
  return result;
}

console.log(binarySearch([1, 2, 2, 3, 4], 2));
console.log(binarySearch([-2], -2));
/**
 * Time complexity
 *
 * If you start with an array of "n" elements, binary search reduces the search space to approximately n/2
 * in the first step, then to n/4 in the next step, and so on.
 * After "k" steps/iteration, the remaining search space is n / 2^k.
 *
 * if k is the last iteration, it means the seach space become 1 in last iteration
 * n / 2^k = 1
 * Solving for "k" (the number of steps): k = log2(n)
 *
 * This logarithmic time complexity is significantly more efficient than linear search (O(n)),
 *
 * Binary search is a powerful algorithm for searching in sorted data and is widely used in various applications for this reason.
 */

/**
 * Given an array of integers, arranged in ascending order (sorted).
 * Also given an element x, find the index of the first element greater than x.  (UPPER BOUND)
 */
