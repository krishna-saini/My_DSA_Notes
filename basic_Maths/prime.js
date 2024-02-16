/**
 * Check if a number is prime or not
 */

// Brute force
// loop through 2 to n-1 and check if the remainder(n%i)===0
// TC O(n)

// optimised solution
// loop through 2 to Math.sqrt(n) and check if the remainder(n%i)===0
// TC O(sqrt(n))