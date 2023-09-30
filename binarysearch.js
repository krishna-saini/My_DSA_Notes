function binarySearch(arr, x) {
  let low = 0;
  let high = arr.length - 1;
  let pos;

  while (low <= high) {
    let mid = low + Math.floor((high - low) / 2);

    //check at mid
    if (arr[mid] === x) {
      return mid;
    }

    //if element is < mid value
    if (x < arr[mid]) {
      high = mid - 1;
    }

    //if element > mid value
    else {
      low = mid + 1;
    }
  }
  return -1;
}

// console.log(binarySearch([2, 5, 8, 9, 10], 2));

//write above in recursive nature
function binarySearch2(arr, l, r, x) {
  if (l <= r) {
    let mid = l + Math.floor((r - l) / 2);

    // If the element is present at the middle
    // itself
    if (arr[mid] == x) return mid;

    // If element is smaller than mid, then
    // it can only be present in left subarray
    if (arr[mid] > x) return binarySearch2(arr, l, mid - 1, x);

    // Else the element can only be present
    // in right subarray
    return binarySearch2(arr, mid + 1, r, x);
  }

  // We reach here when element is not
  // present in array
  return -1;
}
let arr = [2, 3, 4, 10, 40];
let x = 10;
let n = arr.length;
let result = binarySearch2(arr, 0, n - 1, x);
// console.log(result);

// Question 1: Geek wants to scan N documents using two scanners. If S1 and S2 are the time taken by the scanner 1 and scanner 2 to scan a single document, find the minimum time required to scan all the N documents.
function minTime(S1, S2, N) {
  let minT = Math.max(S1, S2) * N;
  for (let i = 0; i <= N; i++) {
    let min = Math.max(S1 * i, S2 * (N - i));
    if (minT > min) {
      minT = min;
    }
  }
  return minT;
}

// let S1 = 1,
//   S2 = 3,
//   N = 2;
// console.log(minTime(S1, S2, N)); //linear search -->O(n)

//using O(1)

function minTime2(S1, S2, N) {
  let N1 = (N * S2) / (S1 + S2);
  let N2 = (N * S1) / (S1 + S2);
  console.log(N1, N2);
  let case1 = Math.max(S1 * Math.ceil(N1), S2 * Math.floor(N2));
  let case2 = Math.max(S1 * Math.floor(N1), S2 * Math.ceil(N2));
  return Math.min(case1, case2);
}

//   let S1 = 2;
//    let  S2 = 4;
//   let  N = 2;
//   console.log(minTime2(S1, S2, N));

//SOlve it using binary search
function minTime2(S1, S2, N) {
  let minT = Math.min(S1 * N, S2 * N);
  let start = 0;
  let end = N;

  while (start <= end) {
    let mid = (start + end) / 2;
    let min = Math.min(S1 * start, S2 * end);
    if (minT >= min) {
      minT = min;
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return minT;
}
let S1 = 1,
  S2 = 3,
  N = 2;
console.log(minTime2(S1, S2, N)); //Binary search -->O(log(n))
