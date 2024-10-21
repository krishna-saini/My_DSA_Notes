// leetcode 162
// find peak el which is strictly greater than its neighbour
// eg - [1,2,1,3,6,5,4]
// o/p - 4
// constraint - nums[i] != nums[i+1] (No adjacent two numbers are the same)
// the two end of the arrays are -∞
// You can return any peak if there are multiples



/**
 * Intuition -
 * peak occurs when the slope changes from increasing to decreasing
 *
 * Hence move towards the side where slope is increasing
 *
 * it means if an element is greater than its right neighbour, then there
 * is a peak on the left side or at the current element itself
 *
 *
 */

function findPeakElement(arr) {
  let n = arr.length; // Size of the array

  // Edge cases:
  if (n === 1) return 0;
  if (arr[0] > arr[1]) return 0;
  if (arr[n - 1] > arr[n - 2]) return n - 1;

  let low = 1,
    high = n - 2;
  while (low <= high) {
    const mid = low + Math.floor((high - low) / 2);

    // If arr[mid] is the peak:
    if (arr[mid - 1] < arr[mid] && arr[mid] > arr[mid + 1]) return mid;

    // If we are in the left:
    if (arr[mid] > arr[mid - 1]) {
      // discard left half
      low = mid + 1;
    }
    // If we are in the right:
    // Or, arr[mid] is a common point:
    else high = mid - 1;
  }
  // Dummy return statement
  return -1;
}

// console.log(findPeakElement([1, 2, 3, 1]));
// console.log(findPeakElement([1, 2, 1, 3, 5, 6, 4]));
console.log(findPeakElement([1, 2, 1, 3, 3, 6, 4])); // repeating number
