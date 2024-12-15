/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (str) {
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