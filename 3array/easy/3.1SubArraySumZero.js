/**
 *
 *
 * Brute force - if we can generate all subarrays of an array, then take out their sum,
 *
 * finding all sub array of an array has TC=O(n^3)
 */

const checkIfSubArrayWithSumZero = (array) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = i; j < array.length; j++) {
      let sum = 0;
      for (let k = i; k <= j; k++) {
        sum += array[k];
      }
      if (sum === 0) {
        return true;
      }
    }
  }
  return false;
};
checkIfSubArrayWithSumZero([5, 2, 0, 3]); // O(n^3)

// optimised solution
const checkIfSubArrayWithSumZero1 = (array) => {
  for (let i = 0; i < array.length; i++) {
    let sum = 0;
    for (let j = i; j < array.length; j++) {
      sum += array[j];
      if (sum === 0) {
        return true;
      }
    }
  }
  return false;
};

const result = checkIfSubArrayWithSumZero1([5, 2, -10, 3]); // O(n^2)
// console.log("zero sume = ", result);

// optimised it to O(n)

/**
 * we can solve it by creating prefix sum array
 * arr = [1,2,3], prefixSumArr = [1,3,6];
 * now to find sum of sub array from index i to j = Sum(i, j)
 * Sum(1,2) = 2+3 = 5 = prefixSumArr(2)  - prefixSumArr(0) = 6 -1 = 5
 * Sum(0,2) = 1+2+3 = 6 = prefixSumArr(2) - prefixSumArr(-1) = 6 - 0 = 6
 * Sum(i, j) = prefixSumArr(j)-prefixSumArr(i-1);
 *
 * TO find sub array of sum = 0, Sum(i,j)=0
 * prefixSumArr(j)=prefixSumArr(i-1);
 *
 * it means the array will have sub array = 0, if
 * 1. any two elements of prefixSumArr are equal
 * 2. if any element of prefixSumArr is zero
 *
 * it means we just need to find the frequency of each el of prefixSumArr
 */

const checkIfSubArrayWithSumZero2 = (array) => {
  const sumMap = {};
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];

    if (sum === 0 || sumMap[sum] === 1) {
      // these are the above two conditions
      return true;
    }
    sumMap[sum] = 1;
  }
  return false;
};

console.log(checkIfSubArrayWithSumZero2([1, 2, 0, 3]));
// TC O(n)
// SC - O(n)

// extend it to find maxLenghtZeroSumSubArray
// keep tracking the maxLength and start index of those subarray of which sum = 0
// take help of hasmap which is storing prefix sum as key and indices as values

function maxLengthZeroSumSubarray(arr) {
  // Map to store the prefix sums and their first occurrence index
  const prefixSumMap = new Map();
  let maxLength = 0;
  let startIndex = -1;
  let prefixSum = 0;

  for (let i = 0; i < arr.length; i++) {
    prefixSum += arr[i];

    // check if prefix sum is 0
    // to handle scenario where first element is 0 itself [0,1,2,3]
    // or if the zeroSumSubArray starts from 0th index [1,2, -3]
    if (prefixSum === 0) {
      maxLength = i + 1;
      startIndex = 0; // as in this case, prefixsum will only be 0 if subarray is starting from 0th index
    }

    // If the prefix sum has been seen before, update the max length subarray if required
    if (prefixSumMap.has(prefixSum)) {
      const prevIndex = prefixSumMap.get(prefixSum);
      const length = i - prevIndex;
      if (length > maxLength) {
        maxLength = length;
        startIndex = prevIndex + 1;
      }
    } else {
      // Store the first occurrence of this prefix sum
      prefixSumMap.set(prefixSum, i);
    }
  }

  // If no subarray with sum 0 is found, return an empty array
  if (maxLength === 0) {
    return [];
  }

  // Return the longest subarray with sum 0
  return arr.slice(startIndex, startIndex + maxLength);
}

// Example usage:
const arr = [1, 2, -3, 0];
const result2 = maxLengthZeroSumSubarray(arr);
console.log('Longest subarray with sum 0:', result2);
