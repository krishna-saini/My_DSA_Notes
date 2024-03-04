/**
 * Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
 */

/**
 * Brute Force
 * loop through array for each element and count individual occurence
 * if count ==1, return that number
 *
 * TC O(n2)
 * SC O(1)
 */

/**
 * Optimal solution - 1
 * Use hashMap to store frequency of each el of array
 * return the element whose frequency is one
 *
 * TC O(n)
 * SC O(n)
 */

/**
 * Optimal solution - 2
 * Use XORing
 * The crucial property of XOR is that when the same number appears twice,
 * the XOR operation cancels out its effect, leaving only the number
 *  that appears an odd number of times.
 *
 * a1^a2^a3 === a3^a1^a2 (order doesnot matter)
 *
 * TC O(n)
 * SC O(1)
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  let xor = 0;
  for (let i = 0; i < nums.length; i++) {
    xor = xor ^ nums[i];
  }
  return xor;
};
