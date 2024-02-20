// check if two given strings are anagram or not

// Brute force
/**
 * input (cab, bac)
 * we can generate permutations of the first string and can match with second string
 * permutations of cab = abc, acb, bac, bca, cab, cba (total = 6 = 3!)
 * TC = O(n!)
 * To optimise it, 
 * find permutations of both string and one of the permuation is going to be sorted arrangement of chars
 * input(care, race) -> sorted permutation(acer, acer) , if both are equal, they are anagram
 *  str1 = str1.split('').sort().join('');
    str2 = str2.split('').sort().join('');
    return str1 == str2;
 * TC = O(nlogn)  // best of worst TC of any sorting algo. which one? merge sort
 * 
 * Can we optimise more on time
 * Ans --> they will have exactly same set to chars => freq of each char will be same => hashing
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  // check their length
  if (s.length !== t.length || !s || !t) {
    return false;
  }
  str1 = str1.replace(/[^a-z0-9]/g, "").toLowerCase();
  str2 = str2.replace(/[^a-z0-9]/g, "").toLowerCase();

  const sMap = {};
  const tMap = {};

  // create hash map of s
  for (let i = 0; i < s.length; i++) {
    sMap[s[i]] ? sMap[s[i]]++ : (sMap[s[i]] = 1);
    tMap[t[i]] ? tMap[t[i]]++ : (tMap[t[i]] = 1);
  } // TC = O(n)

  for (let i = 0; i < s.length; i++) {
    if (sMap[s[i]] !== tMap[s[i]]) {
      return false;
    }
  } // TC = O(n)

  return true;
};

// TC = O(n)

// Space complexity = O(1)

// how to check if two array are anagram or not
// input([1,2,3], [3,2,1])
// output(true)
// input([1,2,3], [3,2,1,4])
// output(false)

function checkArrayAnagram(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  arr1.sort();
  arr2.sort();
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
}   // TC = O(nlogn)

// optimise it using hashing

function checkArrayAnagramHashing(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  const map = {};
  for (let i = 0; i < arr1.length; i++) {
    map[arr1[i]] ? map[arr1[i]]++ : (map[arr1[i]] = 1);
  }
  for (let i = 0; i < arr2.length; i++) {
    if (!map[arr2[i]]) {
      return false;
    }
    map[arr2[i]]--;
  }
  return true;
} // TC = O(n)

