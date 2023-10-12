function upperBound(arr, x) {
  let low = 0;
  let high = arr.length - 1;
  let ans = arr.length;

  while (low <= high) {
    let mid = low + Math.floor((high - low) / 2); // this is done to avoid overflowing that may occur if we do mid = high+ low/2

    if (arr[mid] <= x) {
      // discard the left half
      low = mid + 1;
    } else {
      // element at mid can be a potential answer
      ans = mid;

      end = mid - 1; // go and find something even better on left side
    }
  }
  return ans;
}
console.log(
  upperBound([1, 3, 6, 7, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 8)
);
