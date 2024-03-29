/**
 * https://leetcode.com/problems/first-unique-character-in-a-string/description/
 *
 * Given a string s, find the first non-repeating character in it
 * and return its index. If it does not exist, return -1.
 */

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    const arr = new Array(26).fill(0);

    for (let i=0; i<s.length; i++){
        const index = s.charCodeAt(i) - 'a'.charCodeAt();
        arr[index]++;
    }
  console.log(arr)
    for (let i=0; i<s.length; i++){
        const index = s.charCodeAt(i) - 'a'.charCodeAt();
        if(arr[index] === 1){
            return i
        }
        }
        return -1;
        
};

console.log(firstUniqChar('leetcode'));
console.log(firstUniqChar('leeacode'))
