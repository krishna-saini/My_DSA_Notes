/**
 * Merge Sort is an elegant, recursive, and divide-and-conquer sorting algorithm.
 *
 * Splitting: The array is recursively divided in half until you have sub-arrays of size 1. These arrays are trivially sorted.
 * Merging: Once you have sub-arrays of size 1, you start merging them back together in pairs. During the merge,
 * you compare the smallest elements from both sub-arrays and build a new sorted array.
 */
const mergeSort = (arr, low = 0, high = arr.length - 1) => {
  // base condition
  if (low >= high) {
    return;
  }

  const mid = low + Math.floor((high - low) / 2);

  mergeSort(arr, low, mid);
  mergeSort(arr, mid + 1, high);

  // merge two sorted array
  merge(arr, low, mid, high);
  return arr;
};

// merge two sorted array
// one from low to mid
// one from mid+1 to high
const merge = (arr, low, mid, high) => {
  const temp = []; // to store sorted array
  let left = low; // pointer to left array
  let right = mid + 1; // pointer to right array

  while (left <= mid && right <= high) {
    if (arr[left] <= arr[right]) {
      temp.push(arr[left]);
      left++;
    } else {
      temp.push(arr[right]);
      right++;
    }
  }

  // see if any element left in left array
  while (left <= mid) {
    temp.push(arr[left]);
    left++;
  }

  while (right <= high) {
    temp.push(arr[right]);
    right++;
  }
  //   console.log('krishna', temp);
  // replace el of acutal array with temp
  for (let i = low; i <= high; i++) {
    arr[i] = temp[i - low];
  }
};

console.log('merge sort', mergeSort([2, 5, 1, 3, 9, 0, 8]));

// TC - N*LogN - avg/best/worst
// Every division step involves splitting the array,
// which takes log n steps, and every merge step processes each element once,
// taking O(n) time, resulting in an overall time complexity of O(n log n).
// SC - O(n) because of temp array + ignoring recursive stack space(logn)
