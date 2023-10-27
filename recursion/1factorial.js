/**
 * find factorial of a given integer using recursion
 *
 * base case: n === 1, return 1
 *
 * assumption:  for some n-1, return (n-1)!
 *
 * Self work: for some n, return n * (n-1)!
 */
function factorial(n) {
  // base case
  if (n === 1) return 1;

  return n * factorial(n - 1);
}
