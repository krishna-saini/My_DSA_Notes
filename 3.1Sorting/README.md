## Merge sort

1. divide and merge
2. divide the array in two halves
3.

### pseudo code

mergeSort(arr, low=0, high=arr.length-1){
// base condition
if(low >= high) return ;

mid = (low+high)/2
// left half
mergeSort(arr, low, mid);
// right half
mergeSOrt(arr, mid+1, high);

// merge the two halfves
merge(arr,low, mid, high)
}

merge(arr,low, mid, high){
// merge two sorted array
left = low; // pointer to left half
right = mid+1; // pointer to right half

    while(left<=mid && right <=high){
        if(arr[left]<arr[right]){
            temp.push(arr[left])
        }else{
            temp.push(arr[right])
        }
    }

    // see if any element remain in any left or right arry
    // if yes, push them in temp

    // replace element of actual arr with temp

    for(i->low to high){
        arr[i] = temp[i-low]
    }

}


## Quick Sort Pseudo Code

### Algorithm explanation:

1. **Function** quickSort(arr, low, high):
   - **Base Case**: If low is greater than or equal to high, return.
   - **Partitioning**: Choose a pivot element from the array (e.g., the last, start, mid element).
   - **Partition the Array**: Rearrange the elements of the array such that all elements smaller than the pivot are moved to its left and all elements greater than the pivot are moved to its right.  the main intention of this process is to place the pivot, after each recursion call, at its final position, where the pivot should be in the final sorted array.
   - **Recursive Calls**: Recursively call quickSort on the left and right partitions of the array.
2. **Function** partition(arr, low, high):
   - Inside the function, we will first select the pivot.
   - Now, we will again take two-pointers i and j. The i pointer points to low and the j points to high.
   - Now, the pointer i will move forward and find the first element that is greater than the pivot. 
   -  Similarly, the pointer j will move backward and find the first element that is smaller than the pivot.
   - Here, we need to add some checks like i <= high and j >= low Because it might happen that i is standing at high and trying to proceed or j is standing at low and trying to exceed. Dont let i and j cross the boundries of array
   - Once we find such elements i.e. arr[i] > pivot and arr[j] < pivot, and i < j, we will swap arr[i] and arr[j].
   - We will continue step 3 and step 4, until j becomes smaller than i.
   - Finally, we will swap the pivot element(i.e. arr[low]) with arr[j] and will return the index j i.e. the partition index.

### Example Usage:

- **Input**: An unsorted array arr[].
- **Output**: Array arr[] sorted in non-decreasing order.

- **Pseudocode**:

  ```markdown
  quickSort(arr, low, high):
  if low < high:
  pivotIndex = partition(arr, low, high)
  quickSort(arr, low, pivotIndex - 1)
  quickSort(arr, pivotIndex + 1, high)

  partition(arr, low, high):
  pivot = arr[high]
  i = low
  j = high
  while (i<j>) :
    if arr[i] <= pivot && i<=high:
        i++
    if arr[j] > pivot && j>=low:
        j--
    swap arr[i] with arr[j] if i<j
  swap arr[low] with arr[j] where j is the last index of left index
  return j
  ```
