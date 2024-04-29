/**
 * Given a lsit of positive integers and an int target ,
 * return indices of two numbers such that they add up to a target - 30
 * 1. pick exactly two numbers
 * 2. cannot pick same element twice
 * 3. if you have multiple pairs, select the pair with largest number
 * 4. return null if there is no such pairs
 *
 * Amazon 2019 OA FEE
 */

/**
 * Brute force
 * O(n2) & O(n)
 */

/**
 * using hashing
 */
const pair = (arr, target) => {
  let n = arr.length - 1;
  let sum = 0;
  let numToIndex = {};
  const outputArr = [];

  for (let i = 0; i < arr.length; i++) {
    const complement = target - 30 - arr[i];

    if (numToIndex.hasOwnProperty(complement)) {
      outputArr.push([numToIndex[complement], i]);
    }
    // Store the current number and its index in the Map
    numToIndex[arr[i]] = i;
  }

  // now the output arr may contain more than one value
  // find max out of it
  if (outputArr.length === 0) {
    return null;
  }
  if (outputArr.length === 1) {
    return outputArr[0];
  }

  let ans;
  let max = -Infinity;

  for (let i = 0; i < outputArr.length; i++) {
    const newMax = Math.max(arr[outputArr[i][0]], arr[outputArr[i][1]]);
    if (max < newMax) {
      ans = outputArr[i];
      max = newMax;
    }
  }

  return ans;
};

// console.log('output', pair([1, 10, 25, 35, 60], 90));
console.log('output', pair([20, 50, 40, 25, 30, 10], 90));

// TC - O(n) SC - O(n)

// space complexity can be further optimised if using two pointer method
// but that will requie arrray to be sorted
