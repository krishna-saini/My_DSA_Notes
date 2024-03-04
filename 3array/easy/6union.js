/**
 * Union of two arrays can be defined as the common and distict elements in the
 * two arrays.
 *
 * Here the two given array are sorted and we need to find their union
 * the final arry should be sorted too
 */

/**
 * Brute force
 * use set to store unique element from each array
 * use empty array to extract unique element from map
 * use merge sort to sort the array
 *
 * TC O(nlogn)
 * SC O(n)
 */

/**
 * Optimal solution - Two pointers
 * point i and j to 0th index of each array
 * if arr1[i] > arr2[i] -> move arr2[j] in [], j++
 * if arr1[i] < arr2[i] -> move arr1[i] in [], i++
 * if both are same, move one of them in [] and i++,j++
 */
const findUnion = (arr1, arr2) => {
  let i = 0;
  let j = 0;
  let union = [];

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      if (union.length === 0 || union[union.length - 1] !== arr1[i])
        // this is required to prevent duplicate entries
        union.push(arr1[i]);
      i++;
    } else if (arr1[i] > arr2[j] || union[union.length - 1] !== arr2[j]) {
      union.push(arr2[j]);
      j++;
    } else {
      union.push(arr1[i]);
      i++;
      j++;
    }
  }
  console.log("krishna2", union, i, arr1.length);
  // Add remaining elements from arr1, if any
  while (i < arr1.length && union[i] !== union[union.length - 1]) {
    union.push(arr1[i]);
    i++;
  }
  // Add remaining elements from arr2, if any
  while (j < arr2.length && union[j] !== union[union.length - 1]) {
    union.push(arr2[j]);
    j++;
  }

  return union;
  console.log("krishna", union, i, arr1.length);
};

const arr1 = [1, 3, 5, 7];
const arr2 = [2, 3, 4, 4];
const resultUnion = findUnion(arr1, arr2);

console.log(resultUnion);

// TC - O(n)
// SC O(n+m)
