/*
https://leetcode.com/problems/largest-odd-number-in-string/description/

You are given a string num, representing a large integer.
Return the largest-valued odd integer (as a string) that is a non-empty
substring of num, or an empty string "" if no odd integer exists.
*/

/**
 * Intuition -> move right to left to get faster ans
 *
 */

/**
 * @param {string} num
 * @return {string}
 */
var largestOddNumber = function (num) {
  let ans = '';
  for (let i = num.length - 1; i >= 0; i--) {
    if (num[i] % 2 !== 0) {
      return compareNumbers(ans, num.substring(0, i + 1));
    }
  }
  return ans;
};

function compareNumbers(a, b) {
  // Return the larger of the two numbers as a string
  return a.length > b.length ? a : b;
}
