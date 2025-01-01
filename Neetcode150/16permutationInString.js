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
var checkInclusion = function (s1, s2) {
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
  const checkInclusion = function (s1, s2) {
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
  