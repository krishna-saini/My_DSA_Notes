/**
 * find second max element of an array
 */
// 1. Brute force - sort the array and return the second last element
// will not work if there are duplicates
// TC: O(nlogn)
// SC: O(1)

// 2. Better approach - find max elememt in first iteration
// and then find largest element just smaller than max element in second iteration

function secondMaxElemet(arr) {
  let max = arr[0];
  let secondMax = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > secondMax && arr[i] < max) {
      secondMax = arr[i];
    }
  }
  return secondMax;
}

// TC: O(n)+O(n) = O(n)

// 2. optimized solution - linear search
function secondMaxElementOptimal(arr) {
  let max = -Infinity; // can work if you assigned it arr[0]
  let secondMax = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      secondMax = max;
      max = arr[i];
    } else if (arr[i] > secondMax && arr[i] < max) {
      secondMax = arr[i];
    }
  }
  return secondMax;
}

console.log(secondMaxElementOptimal([1, 2, 30, -4, 5, 30]));
// TC: O(n)
