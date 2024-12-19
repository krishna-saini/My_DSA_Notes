/**
 * fine unique elements in an sorted array 
 * Remove duplicate from sorted array
 * https://leetcode.com/problems/remove-duplicates-from-sorted-array/
 */

/**
 * Brute force -
 * We have to think of a data structure that does not store duplicate elements.
 * We can use set/maps here.
 * this will work for both sorted and unsorted array
 */
function removeDuplicates(arr) {
  const unique = new Set();
  
  // Iterate through the array to add unique elements to the set
  for (let i = 0; i < arr.length; i++) {
    unique.add(arr[i]);
  }
  
  return unique.size; // TC: O(n)
}
console.log(removeDuplicates([1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7])); // 7

// TC: O(n)
// SC: O(n)

/**
 * Optimized solution -
 * We can use two pointers here.
 */
function removeDuplicatesOptimal(arr) {
  if (arr.length === 0) {
    return 0;
  }
  let i = 0;

  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j]; // copy the element to the next position
    }
  }
  console.log(arr);
  return i + 1; // return the length of the unique array
}

console.log(removeDuplicatesOptimal([1,1,2])); // 7

// TC: O(n)
// SC: O(1)
