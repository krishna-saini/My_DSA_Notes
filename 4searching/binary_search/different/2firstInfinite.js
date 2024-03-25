/**
 * FB - question from Priya Priyadarshini
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
  if (arr[0] === Infinity) return 0;
  
   let left = 0;
    let right = 1;
    
  // Step 1: Double the index until we find an infinite element
  // it further optimize the binary search 
  // this condition even helps in those cases where arr length is not given
    while (arr[right] !== Infinity) {
      console.log("krishna")
        left = right;
        right *= 2;
    }
    
    // Step 2: Perform binary search in the range between last valid index and current index
    while (left <= right) {
      console.log("krishna")
        let mid = left + Math.floor((right - left) / 2);
      //condition of success
        if (arr[mid] === Infinity &&  arr[mid - 1] !== Infinity) {
            return mid; // Return the index if first occurrence of infinite element found
          // identify right half
        } else if (arr[mid] === Infinity) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
}
console.log(
  findFirstInfiniteElement( [
    -8,
    2,
    Infinity,
    Infinity,
    Infinity,
    Infinity,
    Infinity,
    Infinity,
    Infinity,
    Infinity,
    Infinity,
    Infinity,
    Infinity,
    Infinity,
    Infinity,
    Infinity,
  ])
);

// TC: O(log(n))
