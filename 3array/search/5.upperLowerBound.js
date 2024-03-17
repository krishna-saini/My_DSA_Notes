/* eslint-disable linebreak-style */
/*
Upper Bound - smallest index i for which arr[i] > target
Lower Bound - smallest index i for which arr[i] >= target

eg- [ 1,2,2,2,3] LB = 1, UB = 4
eg -
*/

const lowerBound = (arr, k) => {
  let low = 0;
  let high = arr.length - 1;
  let ans;
  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    // eslint-disable-next-line linebreak-style

    if (arr[mid] >= k) {
      // mid can be possible ans
      ans = mid;
      // now search in left half
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return ans;
};

const upperBound = (arr, k) => {
  let low = 0;
  let high = arr.length - 1;
  let ans;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    if (arr[mid] > k) {
      ans = mid;
      // look for smaller index on the left
      end = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return ans;
};
const arr = [3, 5, 8, 9, 15, 19];

const ub = upperBound(arr, 9);
console.log('The upper bound is the index:', ub);
const lb = lowerBound(arr, 9);
console.log('The upper bound is the index:', lb);
