/**
 * https://leetcode.com/problems/permutation-in-string/description/
 * 
 * Given two strings s1 and s2, return true if s2 contains a 
permutation
 of s1, or false otherwise.

In other words, return true if one of s1's permutations is the substring of s2. 

Example 1:

Input: s1 = "ab", s2 = "eidbaooo"
Output: true
Explanation: s2 contains one permutation of s1 ("ba")
 */

/**
 * 
 * Thought process - Brute Force
 * 
 * 1. create Freq map of char of s1 and s2
 * 2. outer loop i = s1.len , i<s2.len, i++
 *          inner loop j = i, j> i-s1.len+1, j--
 *                  check if freqMap of both matches
 *                  for (let [char, count] of s1Map) {
                        if (s2Map.get(char) !== count) break;
                    }
 * 

    TC - O(n^2)
    SC - O(n) + O(m)
 */
/**
 * https://leetcode.com/problems/permutation-in-string/description/
 *
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
const checkInclusion = function (s1, s2) {
    if (s1.length > s2.length) return false;
    const myMap = new Map();
  
    // loop through s1 to create map of freq o char
    for (const char of s1) {
      myMap.set(char, (myMap.get(char) || 0) + 1);
    }
    let requiredLength = s1.length; //length of the substring required in s2
  
    // loop through s2
    for (let i = s1.length - 1; i < s2.length; i++) {
      // check if exist in map
      if (myMap.has(s2[i])) {
        // loop through earlier char to see if they are substring or not
        for (let j = i - s1.length + 1; j <= i; j++) {
          if (!myMap.has(s2[j])) {
            requiredLength = s1.length;
          } else {
            requiredLength--;
          }
        }
        if (requiredLength === 0) {
          //            // it means at current i, there is a substring
          // so now check frequency
          const newMyMap = new Map(myMap);
          for (let j = i - s1.length + 1; j <= i; j++) {
            newMyMap.set(s2[j], newMyMap.get(s2[j]) - 1);
            if (newMyMap.get(s2[j]) === 0) {
              newMyMap.delete(s2[j]);
            }
          }
          // now check if map has all values as 0
  
          if (newMyMap.size === 0) {
            return true;
          } else {
            requiredLength = s1.length;
          }
        } else {
          requiredLength = s1.length;
        }
      }
    }
    return false;
};
// TC O(n^2) SC O(n)
// console.log(checkInclusion("ab", "bba"));
  
  /**
  * Optimisation- 
   Since permutations of a string have the same character frequency, 
  * the idea is to compare the character frequencies of a sliding window of size s1.length() in s2 
  * with the character frequencies of s1.
  * 
  * 
  */
  
  //My approach with TC - O(n*k) where n,k are lenght of s1 & s2
const checkInclusion2 = function (s1, s2) {
    if (s1.length > s2.length) return false;
  
    const s1Map = new Map();
    const s2Map = new Map();
    let start = 0;
    // s1 -> "ab" , s2 -> "bbba"
    // Populate s1Map and initial window of s2Map
    for (let i = 0; i < s1.length; i++) {
      s1Map.set(s1[i], (s1Map.get(s1[i]) || 0) + 1);
      s2Map.set(s2[i], (s2Map.get(s2[i]) || 0) + 1);
    }
    // s1Map -> {a->1, b->1} , s2Map {b->2}
  
    /**
      check if both map has equal length and for common key, the value is same in both
       */
    const matches = (s1Map, s2Map) => {
      // O(26)
      for (let [char, count] of s1Map) {
        if (s2Map.get(char) !== count) {
          return false;
        }
      }
      return true;
    };
  
    // Slide the window
    for (let i = s1.length; i < s2.length; i++) {
      // O(n)
      // i=2, s2[i]= b
      // Initial match count
      if (matches(s1Map, s2Map)) return true;
  
      // Add new character to window
      s2Map.set(s2[i], (s2Map.get(s2[i]) || 0) + 1);
  
      // Remove character from start of window
      s2Map.set(s2[start], s2Map.get(s2[start]) - 1);
      start++;
    }
  
    // Check one last time
    return matches(s1Map, s2Map);
};

// TC - O(26*n)

/**
 * OPTIMISATION
 * here we are comparing maps to each other in each iternation
 * This can be avoided if we keep only one map of s1 and a variable matcheCount/requiredLength
 * and while doing sliding window on s2, we keep on checking if end char of s2 lies on this map or not
 * if lies, then reduce the count. if count become 0 for that char, it means it is fully matched. so increase the matchesCount variable
 * 
 * once window size hits, check is start char of s2 lies in map or not
 * if lies, then increase the count. if count becomes 0, it meanas it was fully matched earlier, hence we should decreae the matchesCount variable
 * 
 */
const checkInclusion3 = function (s1, s2) {
    // If s1 is larger than s2, it cannot be a substring
    if (s1.length > s2.length) return false;

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

        // If the window size exceeds the size of s1, shrink the window
        if (end - start + 1 > s1.length) {
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

        // If all unique characters are matched, we found a permutation
        if (matchCount === requiredMatches) {
            return true;
        }
    }

    // If no permutation was found, return false
    return false;
};



/**
 * More optimisation-
 * Since we are dealing with strings - s1 and s2 consist of lowercase English letters
 * hence it is sure that there can be max 26 type of char 
 * Hence an array can better store 
 * 
 * 
 * Create frequency arrays for both s1 and the first window of size s1.length() in s2.
 Slide the window across s2 by one character at a time, updating the window's frequency counts.
Compare the frequency arrays after each slide. If they match, it means a permutation of s1 is found in s2
*/

const checkInclusion4 = function(s1, s2) {
    // If s1 is larger than s2, it cannot be a substring
    if (s1.length > s2.length) return false;

    // Create frequency arrays to store character counts for s1 and the current window in s2
    const s1Map = new Array(26).fill(0); // Frequency of characters in s1
    const s2Map = new Array(26).fill(0); // Frequency of characters in the sliding window of s2

    // Populate s1Map and the initial window of s2Map
    for (let i = 0; i < s1.length; i++) {
        s1Map[s1.charCodeAt(i) - 97]++; // Increment count for s1 characters
        s2Map[s2.charCodeAt(i) - 97]++; // Increment count for initial window in s2
    }

    // Initialize the number of matches between s1Map and s2Map
    let matches = 0;

    // Count initial matches for each of the 26 characters
    for (let i = 0; i < 26; i++) { // O(1)
        if (s1Map[i] === s2Map[i]) matches++;
    }

    // Use a sliding window approach, starting from the first character in s2
    let left = 0;

    // Iterate over the rest of the characters in s2
    for (let right = s1.length; right < s2.length; right++) { // O(n - k)
        // If all 26 characters match, a permutation of s1 is found
        if (matches === 26) return true;

        // Add the new character (at the `right` pointer) to the window
        let index = s2.charCodeAt(right) - 97;
        s2Map[index]++; // Increment its frequency in s2Map

        // Update matches based on the new character
        if (s2Map[index] === s1Map[index]) {
            matches++; // Match increased
        } else if (s2Map[index] === s1Map[index] + 1) {
            matches--; // Match decreased as it exceeded the required count
        }

        // Remove the old character (at the `left` pointer) from the window
        index = s2.charCodeAt(left) - 97;
        s2Map[index]--; // Decrement its frequency in s2Map

        // Update matches based on the removed character
        if (s2Map[index] === s1Map[index]) {
            matches++; // Match increased
        } else if (s2Map[index] === s1Map[index] - 1) {
            matches--; // Match decreased as it fell below the required count
        }

        // Move the left pointer to shrink the window
        left++;
    }

    // Check one last time if all 26 characters match
    return matches === 26;
};

// SC - O(26+26)=O(52), TC - O(n)
//more efficient than using hashmap