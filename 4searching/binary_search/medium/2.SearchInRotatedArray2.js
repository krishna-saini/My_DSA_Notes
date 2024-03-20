/*
https://leetcode.com/problems/search-in-rotated-sorted-array-ii/

array may contain duplicates

return true if target exist else false
*/

/*
[6,7,1,2,3,4,4,5]
[4,5,1,2,3,3,4,4]
[3,3,3,1,2,3]
[3,1,2,3,3,3,3]

only edge case where we wont abe able to see sorted halves
is when arr[low]===arr[mid]===arr[high]
In that case, eliminate them to decrease seach space
*/

var search = function (arr, target) {
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
      const mid = left + Math.floor((right - left) / 2);
   
      if (arr[mid] === target) {
        return true;
      }
if(arr[left]===arr[mid] && arr[mid]===arr[right]){
    left++;
    right--;
    continue;
}

      if (arr[left] <= arr[mid]) {
        // left half is sorted
        // check if target exist
        if (arr[left] <= target && target <= arr[mid]) {
          // discard right half
          right = mid - 1;
        } else {
          // discard left half
          left = mid + 1;
        }
      } else {
        // right half is sorted
        // check if target exist
        if (arr[mid] <= target && target <= arr[right]) {
          // discard left half
          left = mid + 1;
        } else {
          // discard right half
          right = mid - 1;
        }
      }
    }
    return false;
  };

  console.log(search([1, 3], 1));