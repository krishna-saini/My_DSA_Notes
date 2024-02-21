/**
 * check if array is sorted or not
 */

/**
 * Brute force - sort the array and compare it with original array
 * TC: O(nlogn) + o(n) = O(nlogn)
 */

/**
 * Better approach -
 * As we know that for a sorted array the previous of every element is smaller than 
 * or equal to its current element, traverse the array and check if 
 * current element is less that all of the further elements
 * if yes then return true
 * else return false
 *
 */
function checkSorted(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        return false;
      }
    }
  }
  return true;
}

// TC: O(n^2)

/**
 * optimized solution -
 * Traverse the array & check if next element is >= previous element
 */
function checkSortedOptimal(arr) {
  for (let i = 1; i < arr.length - 1; i++) {
    if (arr[i] < arr[i - 1]) {
      return false;
    }
  }
  return true;
}
console.log(checkSortedOptimal([1, 20, 3, 4, 5]));
// TC: O(n)
