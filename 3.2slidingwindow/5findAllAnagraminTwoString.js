/**
 * https://leetcode.com/problems/find-all-anagrams-in-a-string/
 * 
 * @param {string} s
 * @param {string} p
 * @return {number[]}
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
  