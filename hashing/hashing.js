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
 * pre-storing = stores no. of occurence of a number at its eq.index in an array
 *
 * We use it for faster lookup, add/remove value with TC = O(n)
 * JS has inbuilt Objects and Maps as Hash Tables
 */

/**
 *Implement Hash Table in JS using array
 * In order to look up values by key, we need a way to convert keys into valid array indices.
 * this can be done using Hash Fn
 * 1. Hash fn gives same output for same input every time(deterministic)
 * 2. Hash fn are one way function
 * 3. Hash fn should be fast
 * 4. they shouldn's cluster output at specific indices, but distributes uniformly
 */

/**
 * Bad example of hashing/ mapping
 * 1. return 0; -> always return 0 irrespective of input
 * 2. return random(10) --> not deterministic
 * 3. return str.length
 */

/**
 * Basic Hash functions
 * 1. return char.charCodeAt(0) , "a" -> 96, "b" -> 98
 * 2. return char.charCodeAt(0) - 97, "a"->0, "b"->1
 */

/**
 * Hash functions TC = O(1) as it happens very very fast.
 * insert, lookup, delete, search are then TC = O(1)
 * Since hash tables are not indexed, we dont need to shift elements on adding/deleting
 */

/**
 * Cons of Hash table
 * Hash functions can provide same indexing for two different input and it leads to collision
 * However this is handled by using link list
 * Due to collision, the operations are slow down by O(n/k) where k is size of hash table
 */

/**
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
    obj[arr[i]] ? obj[arr[i]]++ : obj[arr[i]] = 1;
  }
  return obj;
};
console.log(frequencyCounterInArray1([1,2,3,4,1,2,3]));  // O(n)
