/**
 * https://leetcode.com/problems/longest-repeating-character-replacement/description/
 * 
You are given a string s and an integer k. You can choose any character of the string and 
change it to any other uppercase English character. You can perform this operation at most k times.

Return the length of the longest substring containing the same letter you can get after performing the above operations.
 */

/**
 * @param {string} s - The input string
 * @param {number} k - Maximum number of characters you can replace
 * @return {number} - The length of the longest substring with at most k replacements
 */
var characterReplacement = function (s, k) {
    // Idea:
    // - Use a sliding window approach with two loops.
    // - Keep track of the frequency of each character in the current window using a map.
    // - Track the maximum frequency of a single character (maxFreq) in the current window.
    // - Calculate the number of characters that need to be replaced:
    //   replacedChar = (current window length) - (maxFreq).
    // - If replacedChar > k, stop expanding the window, as it becomes invalid.
    // - Update the maximum length of valid substrings (maxL) as we iterate.

    // Example breakdown:
    // Input: s = "ABC", k = 2
    // - replacedChar = 3 - 1 = 2 (valid)
    // - maxL = 3
    //
    // Input: s = "AAA", k = 2
    // - replacedChar = 3 - 3 = 0 (valid)
    // - maxL = 3
    //
    // Input: s = "ABA", k = 1
    // - replacedChar = 3 - 2 = 1 (valid)
    // - maxL = 3
    //
    // Input: s = "ABB", k = 1
    // - replacedChar = 3 - 2 = 1 (valid)
    // - maxL = 3

    let maxL = 0; // Tracks the maximum length of valid substrings

    // Outer loop: Start of the sliding window
    for (let start = 0; start < s.length; start++) {
        const map = {}; // Frequency map for characters in the current window
        let maxFreq = 0; // Tracks the maximum frequency of a single character in the window

        // Inner loop: End of the sliding window
        for (let end = start; end < s.length; end++) {
            // Update the frequency map
            map[s[end]] = (map[s[end]] ?? 0) + 1;

            // Update the maximum frequency of a single character
            maxFreq = Math.max(maxFreq, map[s[end]]);

            // Calculate the number of replacements needed for the current window
            const replacedChar = end - start + 1 - maxFreq;

            // If replacements exceed k, break the loop (invalid window)
            if (replacedChar > k) break;

            // Update the maximum length of valid substrings
            maxL = Math.max(maxL, end - start + 1);
        }
    }

    return maxL; // Return the length of the longest valid substring
};
// TC O(n^2), SC - O(n)

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
    // write intution of sliding window

    let maxL = 0;

    let start = 0;
    // keep a map to track freq of each char
    const map = {};
    // keep a variable to track max Freq of currnt char
    let maxFreq = 0;


    for (let end = 0; end < s.length; end++) {
        // calculation - update map count
        map[s[end]] = (map[s[end]] ?? 0) + 1;

        // update max freq of current char
        maxFreq = Math.max(maxFreq, map[s[end]]);



        // if calculation > desired, shrink the window
        while (end - start + 1 - maxFreq > k) {
            //decrease the freq of the start ele
            map[s[start]] = --map[s[start]];
            // map[s[start]]--;
            // dont use map[s[start]] = map[s[start]]++;

            // slide the window
            start++
        }


        // update ans from calculations at the end;
        maxL = Math.max(maxL, end - start + 1)

    }

    return maxL;
};




/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
    // Map to store frequency of characters
    const freq = new Map();
    let maxFreq = 0; // Tracks the max frequency of any character in the current window
    let maxL = 0;    // Tracks the length of the longest valid substring
    let start = 0;   // Start pointer for the sliding window

    for (let end = 0; end < s.length; end++) {
        // Update the frequency of the current character
        const char = s[end];
        freq.set(char, (freq.get(char) || 0) + 1);

        // Update maxFreq to be the highest frequency in the current window
        maxFreq = Math.max(maxFreq, freq.get(char));

        // Calculate the number of replacements needed in the current window
        const replacedChar = (end - start + 1) - maxFreq;

        // If replacements exceed k, shrink the window
        if (replacedChar > k) {
            const startChar = s[start];
            freq.set(startChar, freq.get(startChar) - 1);
            start++;
        }

        // Update maxL with the size of the valid window
        maxL = Math.max(maxL, end - start + 1);
    }

    return maxL;
};


/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
    // Array to store frequency of each character (26 English uppercase letters)
    const freq = new Array(26).fill(0);
    let maxFreq = 0; // Tracks the max frequency of any character in the current window
    let maxL = 0;    // Tracks the length of the longest valid substring
    let start = 0;   // Start pointer for the sliding window

    for (let end = 0; end < s.length; end++) {
        // Update the frequency of the current character
        const charIndex = s[end].charCodeAt(0) - 'A'.charCodeAt(0);
        freq[charIndex]++;

        // Update maxFreq to be the highest frequency in the current window
        maxFreq = Math.max(maxFreq, freq[charIndex]);

        // Calculate the number of replacements needed in the current window
        const replacedChar = (end - start + 1) - maxFreq;

        // If replacements exceed k, shrink the window
        if (replacedChar > k) {
            const startCharIndex = s[start].charCodeAt(0) - 'A'.charCodeAt(0);
            freq[startCharIndex]--;
            start++;
        }

        // Update maxL with the size of the valid window
        maxL = Math.max(maxL, end - start + 1);
    }

    return maxL;
};
