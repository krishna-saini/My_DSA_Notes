function binarySearch(arr, x) {
  let low = 0;
  let high = arr.length - 1;
  let pos;

  while (low <= high) {
    let mid = low + Math.floor((high - low) / 2); // this is done to avoid overflowing that may occur if we do mid = high+ low/2

    //check at mid
    if (arr[mid] === x) {
      return mid;
    }

    //if element is < mid value
    if (x < arr[mid]) {
      high = mid - 1;
    }

    //if element > mid value
    else {
      low = mid + 1;
    }
  }
  return -1;
}

console.log(binarySearch([1, 2, 3, 4], 2));
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

function upperBound(arr, x) {
  let low = 0;
  let high = arr.length - 1;
  let ans = arr.length;

  while (low <= high) {
    let mid = low + Math.floor((high - low) / 2); // this is done to avoid overflowing that may occur if we do mid = high+ low/2

    if (arr[mid] <= x) {
      // discard the left half
      low = mid + 1;
    } else {
      // element at mid can be a potential answer
      ans = mid;

      end = mid - 1; // go and find something even better on left side
    }
  }
  return ans;
}
console.log(
  upperBound([1, 3, 6, 7, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 8)
);
