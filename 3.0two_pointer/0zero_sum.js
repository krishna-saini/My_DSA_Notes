/**
 * return index of two elements in an sorted array whose sum is 0
 */
function sumtozero(arr) {
    let left = 0;
    let right = arr.length - 1;
  
    while (left < right) {
      let sum = arr[left] + arr[right];
      if (sum === 0) return [left, right];
      else if (sum > 0) {
        right--;
      } else left++;
    }
    return [-1, -1];
  }
  
  // console.log(sumtozero([-9, -3, -2, -1, 0, 1, 2, 3, 4]));
  // TC - O(n)
  // SC - O(1)
  // two pointers were able to work here due to sorted array
  // for unsorted array, use hashmap just like two sum and it will cost SC - O(n)