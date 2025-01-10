/**
 * https://leetcode.com/problems/find-all-anagrams-in-a-string/
 * 
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */

/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s1, s2) {
  if (s1.length < s2.length) return [];

  const s1Map = new Map();
  const s2Map = new Map();
  let start = 0;
  // s1 -> "ab" , s2 -> "bbba"
  // Populate s1Map and initial window of s2Map
  for (let i = 0; i < s2.length; i++) {
    s1Map.set(s1[i], (s1Map.get(s1[i]) || 0) + 1);
    s2Map.set(s2[i], (s2Map.get(s2[i]) || 0) + 1);
  }
  // s1Map -> {a->1, b->1} , s2Map {b->2}

  /**
    check if both map has equal length and for common key, the value is same in both
     */
  const matches = (s1Map, s2Map) => {
    // O(26)
    for (let [char, count] of s2Map) {
      if (s1Map.get(char) !== count) {
        return false;
      }
    }
    return true;
  };
const result = [];
  // Slide the window
  for (let i = s2.length; i < s1.length; i++) {
    // O(n)
    // i=2, s2[i]= b
    // Initial match count
    if (matches(s1Map, s2Map)){
      result.push(start)
    }

    // Add new character to window
    s1Map.set(s1[i], (s1Map.get(s1[i]) || 0) + 1);

    // Remove character from start of window
    s1Map.set(s1[start], s1Map.get(s1[start]) - 1);
    start++;
  }

  // Check one last time
  if( matches(s1Map, s2Map)){
  // it means last substring of s1 also matches with s2
    result.push(s1.length - s2.length )
};
  return result;

};


/**
 * optimisation - 
 */
const findAnagrams = function (s2, s1) {
    // If s1 is larger than s2, it cannot be a substring
    if (s1.length > s2.length) return [];
  
    // Create a frequency map to store the character counts of s1
    const freqMap = new Map();
  
    // Initialize the match count to track matching characters
    let matchCount = 0;
  
    // Populate the frequency map with characters from s1
    for (let char of s1) {
      freqMap.set(char, (freqMap.get(char) || 0) + 1);
    }
  
    // Calculate the total number of unique characters to match
    const requiredMatches = freqMap.size;
  
    // Initialize the start pointer for the sliding window
    let start = 0;
    const result = [];
  
    // Iterate over each character in s2 using the end pointer
    for (let end = 0; end < s2.length; end++) {
      // Get the character currently entering the sliding window
      const charIn = s2[end];
      // If the character exists in the frequency map
      if (freqMap.has(charIn)) {
        // Decrease its frequency in the map
        freqMap.set(charIn, freqMap.get(charIn) - 1);
  
        // If the frequency becomes zero, one unique character is fully matched
        if (freqMap.get(charIn) === 0) {
          matchCount++;
        }
      }
  
      // If all unique characters are matched, we found a permutation
      if (matchCount === requiredMatches) {
        result.push(start);
      }
      // console.log(start, end, matchCount, freqMap, result);
  
      // If the window size exceeds the size of s1, shrink the window
      if (end - start + 1 === s1.length) {
        // Get the character currently leaving the sliding window
        const charOut = s2[start];
  
        // If the character exists in the frequency map
        if (freqMap.has(charOut)) {
          // If the frequency is zero before removing, it means this was fully matched earlier,  decrement match count
          if (freqMap.get(charOut) === 0) {
            matchCount--;
          }
  
          // Restore its frequency in the map
          freqMap.set(charOut, freqMap.get(charOut) + 1);
        }
  
        // Move the start pointer to shrink the window
        start++;
      }
    }
  
    return result;
};

// TC - O(n) where n is size of larger string
// SC - O(k) where k is size of smaller string

// optimised it SC further
/**
 * Function to find all starting indices of s1's anagrams in s2.
 *
 * Intuition:
 * - We need to find permutations of `s1` in `s2`, which means matching all characters of `s1` in `s2` with the same frequency.
 * - Use a sliding window of size equal to `s1.length` to examine substrings of `s2`.
 * - Use a frequency map to track the required character counts for `s1`.
 * - Maintain a `matchCount` to track how many unique characters in `s1` are fully matched in the current window of `s2`.
 *
 * When to use this approach:
 * - Use this approach when searching for substrings with specific properties (e.g., permutations, anagrams).
 * - Ideal for problems where frequency or counts of elements in a fixed-size window are relevant.
 */

const findAnagrams_using_Arr = function (s2, s1) {
  // If s1 is larger than s2, no anagrams are possible
  if (s1.length > s2.length) return [];

  // Step 1: Initialize frequency map for `s1`
  const charFrequency = Array(26).fill(0); // Array for 'a' to 'z' characters
  for (let char of s1) {
      charFrequency[char.charCodeAt(0) - 97]++; // Count frequencies of characters in `s1`
  }

  let matchCount = 0; // Tracks how many unique characters in `s1` are fully matched
  const requiredMatches = charFrequency.filter(freq => freq > 0).length; // Total unique characters in `s1` to match

  const result = []; // Stores starting indices of anagrams
  let start = 0; // Start pointer for sliding window

  // Step 2: Iterate over `s2` with the sliding window
  for (let end = 0; end < s2.length; end++) {
      const indexIn = s2[end].charCodeAt(0) - 97; // Character entering the window
      charFrequency[indexIn]--; // Decrease frequency for incoming character

      // If a character's frequency becomes exactly 0, it means it's fully matched
      if (charFrequency[indexIn] === 0) {
          matchCount++;
      }

      // If all unique characters are matched, record the starting index
      if (matchCount === requiredMatches) {
          result.push(start);
      }

      // Step 3: Shrink the window when its size exceeds `s1.length`
      if (end - start + 1 === s1.length) {
          const indexOut = s2[start].charCodeAt(0) - 97; // Character leaving the window

          // If the outgoing character was fully matched, decrement `matchCount`
          if (charFrequency[indexOut] === 0) {
              matchCount--;
          }

          // Restore the frequency of the outgoing character
          charFrequency[indexOut]++;
          start++; // Move the start pointer to shrink the window
      }
  }

  return result;
};

// TC O(n), SC O(1)


  
