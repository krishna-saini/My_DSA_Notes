/**
 * https://leetcode.com/problems/longest-common-prefix/description/
 * Write a function to find the longest common prefix string amongst an array of strings.
   If there is no common prefix, return an empty string "".
 */

function longestCommonPrefix(strs) {
  if (strs.length === 0) return ''; // If the array is empty, return an empty string

  // Iterate through the characters of the first string
  for (let i = 0; i < strs[0].length; i++) {
    // Check if the character at index i of strs[0] is the same in all strings
    for (let j = 1; j < strs.length; j++) {
      if (strs[j][i] !== strs[0][i]) {
        // If characters don't match, return the substring from index 0 to i
        return strs[0].substring(0, i);
      }
    }
  }

  // If all characters match, return the first string
  return strs[0];
}

// Example usage:
const strings = ['flower', 'flow', 'flight'];
console.log(longestCommonPrefix(strings)); // Output: "fl"

// O(n^2)

// using JS method

var longestCommonPrefix2 = function (strs) {
  if (strs.length === 1) {
    return strs[0];
  }
  // find min length str
  const min = strs.reduce((acc, curr) => {
    return acc.length > curr.length ? curr : acc;
  }, strs[0]);
  let ansIndex;

  for (let i = 0; i < min.length; i++) {
    if (!strs.every((str) => str.startsWith(min.slice(0, i + 1)))) {
      ansIndex = i;
      break;
    }
  }
  return [min, ansIndex];
  // return ansIndex ?  min.slice(0, ansIndex) : "";
};
