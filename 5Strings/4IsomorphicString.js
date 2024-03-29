/**
     *https://leetcode.com/problems/isomorphic-strings/description/
    two strings are considered isomorphic if the characters in one string
    can be replaced to obtain the other string while preserving the order
    of characters. This means that each character in one string must map
    to a unique character in the other string, and no two characters in
    the first string can map to the same character in the second string.
    */

const isIsomorphic = (s, t) => {
  if (s.length !== t.length) {
    return false;
  }

  const sMap = new Map(); // Map to store mapping from characters in s to characters in t
  const tMap = new Map(); // Map to store mapping from characters in t to characters in s

  for (let i = 0; i < s.length; i++) {
    const sChar = s[i];
    const tChar = t[i];

    if (
      (sMap.has(sChar) && sMap.get(sChar) !== tChar) ||
      (tMap.has(tChar) && tMap.get(tChar) !== sChar)
    ) {
      return false; // If the characters don't match the expected mapping, return false
    }

    // Update the mapping for s and t
    sMap.set(sChar, tChar);
    tMap.set(tChar, sChar);
  }

  return true;
};

// TC O(n) SC O(n)
console.log(isIsomorphic('egg', 'add')); // Output: tru
console.log(isIsomorphic('foo', 'bar')); // Output: false
console.log(isIsomorphic('paper', 'title')); // Output: true

/**
 * Optimised solution
 * since we are using maps to store string as key & value
 * strings can be converted to ASCII and can be stored in a 256 array too
 * as there are only 256 ASCII chars
 */

function isIsomorphicOptimised(s, t) {
  if (s.length !== t.length) {
    return false; // If the lengths of the strings are different, they can't be isomorphic
  }

  const sMap = Array(256).fill(-1); // Array to store mapping from characters in s to characters in t
  const tMap = Array(256).fill(-1); // Array to store mapping from characters in t to characters in s

  for (let i = 0; i < s.length; i++) {
    const sChar = s.charCodeAt(i);
    const tChar = t.charCodeAt(i);

    // Check mapping from s to t
    if (sMap[sChar] !== -1) {
      if (sMap[sChar] !== tChar) {
        return false; // If the mapping is different from expected, return false
      }
    } else {
      sMap[sChar] = tChar; // Update mapping from s to t
    }

    // Check mapping from t to s
    if (tMap[tChar] !== -1) {
      if (tMap[tChar] !== sChar) {
        return false; // If the mapping is different from expected, return false
      }
    } else {
      tMap[tChar] = sChar; // Update mapping from t to s
    }
  }

  return true; // All characters satisfy the mapping, return true
}

// Example usage:
console.log(isIsomorphic('egg', 'add')); // Output: true
console.log(isIsomorphic('foo', 'bar')); // Output: false
console.log(isIsomorphic('paper', 'title')); // Output: true
