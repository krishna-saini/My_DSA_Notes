/*
https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/description/

[3 4 5 1 2]
[4 5 1 2 3]
[5 1 2 3 4]
[1 2 3 4 5]
Though the array is rotated, we can clearly notice that for every index,
one of the 2 halves will always be sorted. In the above example,
the right half of the index mid is sorted.

If arr[low] <= arr[mid]: In this case, we identified that the left half is sorted.
If arr[mid] <= arr[high]: In this case, we identified that the right half is sorted.

now the min element in any sorted half will be the leftmost element
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
const findMin1 = function(nums) {
    let low =0;
      let ans = Infinity;
    let high = nums.length-1;
    while(low<=high){
        const mid = low + Math.floor((high-low)/2);
      
// see if left half is sorted
        if(nums[low]<=nums[mid]){
            // leftmost will be min value
            ans = Math.min(ans, nums[low]); 
            // discard left half
            low = mid+1;
        }else{
            //right half is sorted
              ans = Math.min(ans, nums[mid]);
              //discardright half
              high = mid-1;
        }
    }

    return ans
    
};

console.log(findMin[4,5,6,0,1,2,3]);

// Above solution will not 


// follow up -> what if there are repeated elementes 

/**
 * @param {number[]} arr - A rotated sorted array (may contain duplicates)
 * @return {number} - The minimum element in the array
 */
const findMin = function (arr) {
    /**
     * Thought process:
     * We observe that in a rotated sorted array, one of the halves will always be sorted.
     * Example: [11, 13, 15, 17]
     * If there is no rotation, the leftmost element is the minimum.
     *
     * However, in the case of rotation, the minimum element will lie in the unsorted half.
     *
     * For example:
     * [3, 4, 5, 1, 2] -> Mid = 5, right half is unsorted, min lies in it.
     * [4, 0, 1, 2, 3] -> Mid = 1, left half is unsorted, min lies in it.
     *
     * Key observations:
     * - The smallest element (minimum) is the only one smaller than its previous element, 
     *   which marks the "pivot point" of rotation.
     * - If the array is already sorted, we can return the leftmost element as the minimum.
     *
     * How to identify the unsorted half:
     * - If `arr[left] < arr[mid]`, the left half is sorted, and the right half is unsorted.
     * - If `arr[left] >= arr[mid]`, the left half is unsorted, and the right half is sorted.
     *
     * Edge cases:
     * 1. If the length of `arr` is 1, return the only element.
     * 2. Handle repeated elements to avoid failing when duplicates are present.
     */
  
    // Edge case: Single element array
    if (arr.length === 1) return arr[0];
  
    let left = 0;
    let right = arr.length - 1;
  
    while (left < right) {
      // If the subarray is already sorted, return the leftmost element
      if (arr[left] < arr[right]) {
        return arr[left];
      }
  
      const mid = left + Math.floor((right - left) / 2);
  
      // Eliminate duplicates by adjusting boundaries
      // If left, mid, and right are equal, the duplicate values might be obscuring the true rotation point.
      if (arr[left] === arr[mid] && arr[mid] === arr[right]) {
        left++;  // Shrink the search space from the left
        right--; // Shrink the search space from the right
        continue;
      }
  
      // Check if mid is the minimum element
      // In a rotated sorted array, the smallest element (pivot) satisfies the condition:
      // arr[mid] < arr[mid - 1]
      if (arr[mid] < arr[mid - 1]) {
        return arr[mid];
      }
  
      // If the left half is sorted, the pivot (minimum) must be in the right half
      else if (arr[left] <= arr[mid]) {
        left = mid + 1; // Move the left pointer to the right half
      }
  
      // If the right half is sorted, the pivot (minimum) must be in the left half
      else {
        right = mid - 1; // Move the right pointer to the left half
      }
    }
  
    /**
     * At the end of the algorithm, left will always point to the smallest element in the rotated sorted array.
     */
    return arr[left];
  };
  
  console.log(findMin([1, 1, 3, 1])); // Output: 1
  console.log(findMin([2, 2, 2, 0, 1, 2])); // Output: 0
  console.log("Result:", findMin([2, 2, 2, 2, 2, 0, 1, 2])); // Output: 0
  console.log(findMin([11, 13, 15, 17])); // Output: 11
  