/**
 * https://leetcode.com/problems/longest-substring-without-repeating-characters/description/
 * 
 * @param {string} s
 * @return {number}
 */

/**
 * Questions to ask
 * 1. will there be lower case char only
 * 2. can it have spaces or non alpha numeric char 
 * 
 * Brute force 
 * 
 * variable sliding window problem
 */
const lengthOfLongestSubstring = function (str) {
    if (str.length === 1) {
      return 1;
    }
    // Brute force approach would be O(n^2) - checking all possible substrings
  
    // Optimized solution using sliding window technique
    // Time Complexity: O(n), where n is the length of the string
    // Space Complexity: O(min(m, n)), where m is the size of the character set
  
    let start = 0; // Start of the current window
    let maxSubStrLenWithoutRepetition = 0; // Length of the longest substring without repeating characters
  
    let uniqueChar = new Set(); // To track unique characters in the current window
  
    for (let end = 0; end < str.length; end++) {
      // Handle duplicates: if the current character is already in our set
      while (uniqueChar.has(str[end])) {
        // Update the result if necessary
        // This is done here because we're about to shrink the window
        maxSubStrLenWithoutRepetition = Math.max(
          maxSubStrLenWithoutRepetition,
          uniqueChar.size
        );
  
        // Remove the start character from the set
        uniqueChar.delete(str[start]);
  
        // Slide the window by moving the start pointer
        start++;
      }
  
      // Add the current character to our set of unique characters
      uniqueChar.add(str[end]);
  
      // Note: We don't update maxSubStrLenWithoutRepetition here because
      // we want to consider the final window after the loop ends
    }
  
    // Return the maximum of our tracked max length and the final window size
    // This handles the case where there is no repeating char
    return Math.max(maxSubStrLenWithoutRepetition, uniqueChar.size);
};
  

// Example usage:
// console.log(lengthOfLongestSubstring("abcabcbb")); // Output: 3
// console.log(lengthOfLongestSubstring("bbbbb")); // Output: 1
// console.log(lengthOfLongestSubstring("pwwkew")); // Output: 3

/**
 * Thought Process:
 * In above solution, we are using a while loop too to delete all values in the set unless there is repeated char.
 * so we want to optimise that
 * 
 * The problem is to find the length of the longest substring without repeating characters.
 * Let's break it down with guiding questions:
 * 
 * 1. **What are we trying to track?**
 *    - We need to track a substring where no characters repeat. 
 *    - To do this efficiently, we'll use a sliding window with two pointers: `start` (beginning of the substring) 
 *      and `i` (end of the substring).
 * 
 * 2. **How do we know if a character is repeated?**
 *    - Use a `Map` to keep track of the most recent index of each character. 
 *    - If the current character is already in the map and its last occurrence is within the current window (`[start, i]`), 
 *      it means this character is repeated.
 * 
 * 3. **How do we handle a repeated character?**
 *      - The substring becomes invalid because of the repetition. To fix this:
 *        - Move `start` to one position after the last occurrence of the repeated character.
 *    - **Why?**
 *      - This ensures the new substring starts just after the repeated character, eliminating the repetition.
 * 
 * 4. What if the repeated character occurred before the current `start`
 *      - If it occurred before, it’s no longer part of the substring, so `start` shouldn’t move backward.
 *      - Using `Math.max` ensures `start` only moves forward.
 * 
 * 5. **What about the length of the substring?**
 *    - At each step, the length of the current substring is `i - start + 1`.
 *    - Keep track of the maximum substring length (`maxLen`) as you iterate.
 * 
 * 6. **Example to Build Intuition:**
 *    Let's walk through the input `"abcabcbb"`:
 *    - `start = 0`, `i = 0`: `'a'` is not repeated → Extend substring → `maxLen = 1`.
 *    - `start = 0`, `i = 1`: `'b'` is not repeated → Extend substring → `maxLen = 2`.
 *    - `start = 0`, `i = 2`: `'c'` is not repeated → Extend substring → `maxLen = 3`.
 *    - `start = 0`, `i = 3`: `'a'` is repeated → Move `start` to `1` → `maxLen = 3`.
 *    - Continue updating `start`, `seen`, and `maxLen` as you traverse the string.
 */

const lengthOfLongestSubstring_optimised = function(s) {
    // Keeps track of the most recent index of each character.
    const seen = new Map();
    // `start` keeps track of the starting index of the current substring.
    let start = 0;
    // `maxLen` keeps track of the maximum substring length found so far.
    let maxLen = 0;
    
    for (let i = 0; i < s.length; i++) {
        // **Question:** What happens when the current character is already in the substring?
        if (seen.has(s[i])) {
            // **Answer:** Move `start` to one position after the last occurrence of this character.
            start = Math.max(seen.get(s[i]) + 1, start);
        }
        
        // Update the most recent index of the current character.
        seen.set(s[i], i);
        
        // Calculate the current substring length and update `maxLen`.
        maxLen = Math.max(i - start + 1, maxLen);
    }
    
    // Return the length of the longest substring without repeating characters.
    return maxLen;
};

// TC - O(n), SC - O(k) where k is the size of the character set

// follow up 1 -> can we optimsed space complexity
const lengthOfLongestSubstring_optimised_more = function (s) {
  let start = 0;
  let maxLen = 0;
  const arr = new Array(26).fill(0);

  for (let i = 0; i < s.length; i++) {
    const charCode = s.charCodeAt(i) - 97; // take care of capital letter/ non alphanumeric char 
    
    if (arr[charCode] >= 0) {
      start = Math.max(arr[charCode], start);
    }
    
    arr[charCode] = i + 1;
    maxLen = Math.max(i - start + 1, maxLen);
  }

  return maxLen;
};

// TC O(n), SC O(1)
/**
 * Above approach has better SC but it will not handle Unicode characters and emojis correctly. Here's why:

The array size is fixed at 26, assuming only lowercase English letters (a-z).
Unicode characters and emojis have character codes well outside this range.
The Map can handle any character as a key, making it suitable for Unicode and emoji handling.
 */

// followup question 2
/**
How would your approach change if the problem was to find the longest substring with exactly two distinct characters?
Input: "eceba"
Output: 3
Explanation:
The longest substring with exactly two distinct characters is "ece".
Substrings with two distinct characters: "ec", "ece", "ce", "eb", "ba"

solution - fixed sliding window problem
 */
const lengthOfLongestSubstringTwoDistinct = function (s) {
  if (s.length < 2) return s.length;

  let start = 0;
  let maxLen = 0;
  const charCount = new Map(); // Tracks the frequency of characters in the window

  for (let end = 0; end < s.length; end++) {
      // calculations
      const char = s[end];
      charCount.set(char, (charCount.get(char) || 0) + 1);

      // maintain the window
      while (charCount.size > 2) {
          const startChar = s[start];
          charCount.set(startChar, charCount.get(startChar) - 1);
          if (charCount.get(startChar) === 0) {
              charCount.delete(startChar); // Remove the character from the map
          }
          start++; // Shrink the window
      }

      // gets ans from the calculations
      maxLen = Math.max(maxLen, end - start + 1);
  }

  return maxLen;
};
console.log(lengthOfLongestSubstringTwoDistinct("eceba")); // Output: 3
console.log(lengthOfLongestSubstringTwoDistinct("ccaabbb")); // Output: 5
console.log(lengthOfLongestSubstringTwoDistinct("ababffzzeee")); // Output: 5
console.log(lengthOfLongestSubstringTwoDistinct("aaaa")); // Output: 4
console.log(lengthOfLongestSubstringTwoDistinct("a")); // Output: 1

