/*
find i for which arr[i]>x

Input Format: N = 4, arr[] = {1,2,2,3}, x = 2
Result: 3
*/

// Brute force - linear search with O(n)

function upperBound(arr, x, n) {
  let low = 0,
    high = n - 1;
  let ans = n;

  while (low <= high) {
    let mid = low + Math.floor((high-low) / 2);
    // maybe an answer
    if (arr[mid] > x) {
      ans = mid;
      //look for smaller index on the left
      high = mid - 1;
    } else {
      low = mid + 1; // look on the right
    }
  }
  return ans;
}

let arr = [3, 5, 8, 9, 15, 19];
let n = 6,
  x = 9;
let ind = upperBound(arr, x, n);
console.log("The upper bound is the index:", ind);

// O(logn)
