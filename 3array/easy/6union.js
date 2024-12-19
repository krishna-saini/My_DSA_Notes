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
  let i = 0; // Pointer for arr1
  let j = 0; // Pointer for arr2
  let union = []; // Array to store the union of arr1 and arr2

  // Iterate through both arrays simultaneously
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      // If the current element in arr1 is smaller
      if (union.length === 0 || union[union.length - 1] !== arr1[i]) {
        // Add to union if it's the first element or different from the last added element
        // This check prevents duplicate entries in the union array
        union.push(arr1[i]);
      }
      i++; // Move to the next element in arr1
    } else if (arr1[i] > arr2[j]) {
      // If the current element in arr2 is smaller
      if (union.length === 0 || union[union.length - 1] !== arr2[j]) {
        // Add to union if it's the first element or different from the last added element
        union.push(arr2[j]);
      }
      j++; // Move to the next element in arr2
    } else {
      // If elements are equal, add one of them to the union
      union.push(arr1[i]);
      i++; // Move to the next element in both arrays
      j++;
    }
  }

  // Add remaining elements from arr1, if any
  while (i < arr1.length) {
    if (union[union.length - 1] !== arr1[i]) {
      // Only add if it's different from the last added element
      union.push(arr1[i]);
    }
    i++;
  }

  // Add remaining elements from arr2, if any
  while (j < arr2.length) {
    if (union[union.length - 1] !== arr2[j]) {
      // Only add if it's different from the last added element
      union.push(arr2[j]);
    }
    j++;
  }

  return union;
};

const arr1 = [1, 1, 3, 5, 7];
const arr2 = [2, 3, 4, 4, 7, 8, 9];
const resultUnion = findUnion(arr1, arr2);

console.log('union is', resultUnion);

// TC - O(n)
// SC O(n+m)
