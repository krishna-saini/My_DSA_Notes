/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    // assume s, t contains lowercase
  
    // early check
    if (s.length !== t.length) {
      return false;
    }
  
    /**
    Approach 1
    find all permutations of first string
    & then match them each with second string
  
    TC O(n!) SC O(1)
     */
  
    /**
    Approach 2
    lexically Sort both the strings 
    .sort() will do this
    check if they are equal or not
  
    TC- O(nlogn) SC - O(1)
     */
  
    /**
    APporach 3
    Using hashing
    keep a hash to track freq of each char in first string
  
    update the hash if we find same char in second string
  
    loop through the hash to see if there is any duplcat
     */
  
    const myMap = new Map();
  
    //keep a hash to track freq of each char in first string
    for (let i = 0; i < s.length; i++) {
      // if map already has the char
      if (myMap.has(s[i])) {
        myMap.set(s[i], myMap.get(s[i]) + 1); // dont use postfix / prefix
      } else {
        myMap.set(s[i], 1);
      }
    }
    console.log("1", myMap);
  
    //     update the hash if we find same char in second string
    for (let i = 0; i < t.length; i++) {
      if (myMap.has(t[i])) {
        myMap.set(t[i], myMap.get(t[i]) - 1);
      }
    }
    console.log("2", myMap);
  
    //.    loop through the hash to see if there is any duplcat
  
    for (const [key, value] of myMap) {
      if (value > 0) {
        return false;
      }
    }
  
    return true;
  
    // further optimise
    // we dont need last loop
    // just check in second loop if freq is 0, then delete that property
    // and just check size of map after 2nd loop
};
  
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    // Early check
    if (s.length !== t.length) {
      return false;
    }
  
    const charCount = new Map();
  
    // Count characters in s
    for (let char of s) {
      charCount.set(char, (charCount.get(char) || 0) + 1);
    }
  
    // Decrement counts for characters in t
    for (let char of t) {
      if (!charCount.has(char)) {
        return false; // Character in t not present in s
      }
      let count = charCount.get(char) - 1;
      if (count === 0) {
        charCount.delete(char);
      } else {
        charCount.set(char, count);
      }
    }
  
    // If charCount is empty, all characters matched
    return charCount.size === 0;
};
  