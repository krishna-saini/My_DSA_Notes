/**
 * https://leetcode.com/problems/group-anagrams/submissions/1468823532/
 * Given an array of strings strs, group the  anagrams together. You can return the answer in any order.
Example 1:

Input: strs = ["eat","tea","tan","ate","nat","bat"]

Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
*/

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
const groupAnagrams = function (strs) {
    // Edge cases
    if (strs.length === 0) return [];
    if (strs.length === 1) return [strs];
    // a map to store sorted string as key and all anagramed strings as values
    const myMap = new Map(); // TC O(n) -> if there is no anagram

    // lets sort each el of the input string array
    for (let i = 0; i < strs.length; i++) { // O(n)
        // TC of split is O(k) - k is length of string
        // SC of split is O(k) as it will return an array
        // TC of sort is kO(logk) & SC is also there for sorting 
        // TC of join is O(k)
        const sortedStr = strs[i].split("").sort().join("");
        // so above step has TC - k + k*logk + k ~ O(logk)
        // SC of above step is O(k)
        if (myMap.has(sortedStr)) { // TC O(1) lookup
            myMap.get(sortedStr).push(strs[i]) // O(1)
        } else {
            myMap.set(sortedStr, [strs[i]]) // O(1)
        }
    }
    // console.log("sorted map", myMap)
    //TC  O(n) as myMap.values() has O(1) 
    // SC is O(n * k) bcz in  the worst case, 
    // where each string is its own anagram group:
    // There will be n groups (one for each input string).
    // Each group is an array containing one string of length up to k.
    return Array.from(myMap.values());

    // Overall TC is O(n*klogK)
    // SC is O(n*k)
    // SC of split will not contribute in overall SC as that space is reusable
};