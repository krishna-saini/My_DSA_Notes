/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = function (str) {
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
            maxSubStrLenWithoutRepetition = Math.max(maxSubStrLenWithoutRepetition, uniqueChar.size);
            
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
    // This handles the case where the longest substring is at the end of the string
    return Math.max(maxSubStrLenWithoutRepetition, uniqueChar.size);
};

// Example usage:
// console.log(lengthOfLongestSubstring("abcabcbb")); // Output: 3
// console.log(lengthOfLongestSubstring("bbbbb")); // Output: 1
// console.log(lengthOfLongestSubstring("pwwkew")); // Output: 3


// Alternate approach using map -> faster as no removal, no inner while loop
const lengthOfLongestSubstring2 = function (str) {
    // keeps track of the most recent index of each letter.
    const seen = new Map();
    // keeps track of the starting index of the current substring.
    let start = 0;
    // keeps track of the maximum substring length.
    let maxLen = 0;
  
    for (let end = 0; i < str.length; end++) {
      // if the current char was seen, move the start to (1 + the last index of this char)
      // max prevents moving backward, 'start' can only move forward
      if (seen.has(str[end])) {
        // This handles cases where an old character occurrence is behind the current window start
        start = Math.max(seen.get(s[i]) + 1, start);
      }
      seen.set(s[i], i);
      // maximum of the current substring length and maxLen
      maxLen = Math.max(i - start + 1, maxLen);
    }
  
    return maxLen;
};
  