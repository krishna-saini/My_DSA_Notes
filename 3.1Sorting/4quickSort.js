const quickSort = (arr, low = 0, high = arr.length - 1) => {
  // base condition
  if (low < high) {
    const pivotIndex = partition(arr, low, high);
    quickSort(arr, low, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, high);
  }
  return arr;
};

const partition = (arr, low, high) => {
  //  we will first select the pivot(
  const pivot = arr[low];
  // initialize two pointers to find smaller and larger element than pivot
  let i = low;
  let j = high;

  while (i < j) {
    console.log('arr', i, j, arr);
    //  the pointer i will move forward and find the first element that is greater than the pivot.
    // 2nd check is required if  i is standing at high and trying to proceed
    // means i cannot exceed the array boundry
    while (arr[i] <= pivot && i <= high) {
      i++;
    }
    //  the pointer j will move backward and find the first element that is smaller than the pivot.
    // 2nd check is required if j is standing at low and trying to exceed.
    while (arr[j] > pivot && j >= low) {
      j--;
    }

    // Once we find such elements i.e. arr[i] > pivot and arr[j] < pivot, and i < j, we will swap arr[i] and arr[j].
    if (i < j) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    console.log('arr end', i, j, arr);
  }
  // Finally, we will swap the pivot element(i.e. arr[low]) with arr[j] and will return the index j i.e. the partition index.
  [arr[low], arr[j]] = [arr[j], arr[low]];
  console.log('partition return', arr, j);
  return j;
};

console.log('krishn a', quickSort([3, 1, 2], 0, 2));
// console.log('partition', quickSort([17, 6, 2, 8, 3], 0, 4));


// TC - NlogN - avg case 
// SC O(1) ignoring recursive stack
// Worst Case: O(n 2), which occurs when the pivot selection results in highly unbalanced
// partitions (e.g., always picking the smallest or largest element as the pivot in a sorted array).