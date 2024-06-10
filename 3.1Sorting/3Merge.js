const mergeSort = (arr, low = 0, high = arr.length - 1) => {
  // base condition
  if (low >= high) {
    return;
  }
  // or same base condition
  if (arr.length <= 1) return;

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

console.log(mergeSort([2, 5, 1, 3, 9, 0, 8]));


// TC - N*LogN - avg/best/worst
// SC - O(n) because of temp array + ignoring recursive stack space

