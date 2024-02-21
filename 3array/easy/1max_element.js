/**
 * find max element of an array
 */

// 1. Brute force - sort the array and return the last element
// TC: O(nlogn)
// SC: O(1)

// 2. optimized solution - linear search
// TC: O(n)
function maxElement(arr) {
  let max = -Infinity; // can work if you assigned it arr[0]
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i];
  }
  return max;
}


console.log(maxElement([1, 2, 3, 4, 5]));

// TC: O(n)
// SC: O(1)
