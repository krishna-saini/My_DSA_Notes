### Binary search is only applicable in a sorted search space. The sorted search space does not necessarily have to be a sorted array. It can be anything but the search space must be sorted.
### In binary search, we generally divide the search space into two equal halves and then try to locate which half contains the target. According to that, we shrink the search space size.

1. for rotated sorted arr, Though the array is rotated, we can clearly notice that for every index,one of the 2 halves will always be sorted. 

```jsx
If arr[low] <= arr[mid]:  we identified that the left half is sorted.
If arr[mid] <= arr[high]:  we identified that the right half is sorted.
```

1. only edge case where we wont abe able to see sorted halves
is when `arr[low]===arr[mid]===arr[high]`
In that case, eliminate them to decrease seach space

```jsx
  if (arr[left] === arr[mid] && arr[mid] === arr[right]) {
      left++;
      right--;
      continue;
    }
```

1. it works best for logical sort arrays like [1,2,3,4], [1, -5, 10, 2, infinite, infinite, infinite]
2. if arr size is not given then Double the index until we find our target range