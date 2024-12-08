
/**
 * follow up 
 * https://leetcode.com/problems/valid-palindrome/description/
 * A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.
 */

/**
 * avoid recursive, which could lead to stack overflow for very long strings. 
   instead use iterative approach wherever u can,. it will save SC
 */
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    let left = 0;
    let right = s.length - 1;
    while (left < right) {
      // Move left pointer to the next alphanumeric character
      while (left < right && !isAlphanumeric(s[left])) {
        left++;
      }
      // Move right pointer to the next alphanumeric character
      while (left < right && !isAlphanumeric(s[right])) {
        right--;
      }
  
      // again check out of bound condition
      if (left < right) {
        if (s[left].toLowerCase() !== s[right].toLowerCase()) {
          return false;
        }
        left++;
        right--;
      }
    }
  
    return true;
};

// Even though there are nested loops, each character is processed at most once, so the overall time complexity remains O(n).

// Space Complexity: O(1)- No matter how long the input string is, the amount of extra memory used doesn't grow with the input size.
  
/**
 Prefer this over directly replacing string using regex
which is slow operation and creates new string  */
function isAlphanumeric(char) {
    const code = char.charCodeAt(0);
    return (
        (code > 47 && code < 58) || // numeric (0-9)
        (code > 64 && code < 91) || // upper alpha (A-Z)
        (code > 96 && code < 123)
    ); // lower alpha (a-z)
}
  
  