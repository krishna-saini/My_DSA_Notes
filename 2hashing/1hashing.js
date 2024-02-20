// find the number of occurance of given character

function frequencyOfChar(char, str) {
  let count = 0;
  for (let i = 0; i < str; i++) {
    if (str[i] === char) {
      count++;
    }
  }
  return count;
}

frequencyOfChar("a", "alibaba");

// TC of frequencyOfChar = O(n)
// if we are calling it m times to get frequency of m diff chars, the TC = O(nm) which is very less effectiv

/**
 * Solution is Hashing/Hash Tables/ Hash functions/ Hash Map.
 *  Hashing = pre-storing y + fetching
*/


/**
 * Problem 1
 * Count frequency of each element in the array
 * Problem statement: Given an array, we have to found the number of occurrences of each element
 * in the array.
 */

// Brute force approach
// TC - Object(n^2)

// use Hashing
const frequencyCounterInArray1 = (arr) => {
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    obj.hasOwnProperty(arr[i]) ? obj[arr[i]]++ : obj[arr[i]] = 1;
  }
  return obj;
};
console.log(frequencyCounterInArray1([1,2,3,4,1,2,3]));  // TC =  O(n)


/**
 * Space complexity
 * The SC will be defined by the number of unique characters
 * in the worst case, the number of unique chars = no. of chars of the string
 * but even if no. of chars in string = 10^5/10^7, the no. of entries in the map will be 52(26 + 26)
 * so by increasing length of string, the space is not increasing.
 * space is constant w.r.t input size
 * SC = O(1)
 * See: https://github.com/singhsanket143/FrontendDSA/blob/master/July1/Advanced_Problems_on_Arrays_and_Objects.pdf
 */


/**
 * Problem 2
 * Given a string of character, find the first non - repeating chars in the string
 */

const firstNonRepeatingChar = (str) => {
  let obj = {};

  //Frequency mapping
  for (let i = 0; i < str.length; i++) {
    obj.hasOwnProperty(str[i]) ? obj[str[i]]++ : obj[str[i]] = 1;
  }
  
  // loop through map to find first non-repeating char
  for (let i = 0; i < str.length; i++) {
    if(obj[str[i]] === 1) {
      return str[i];
    }
  }

  return -1;
};
console.log(firstNonRepeatingChar('krishna')) // TC = O(n)
// SC = O(1) as the no. of entries in the map will be 52(26 + 26) which is constant
// if these were numbers, then the SC will be O(n) as the no. of entries in the map will be equal to the no. of unique numbers in the array