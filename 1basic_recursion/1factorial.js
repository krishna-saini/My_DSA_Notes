const fact = (n) => {
  let ans = 1;
  for (let i = 1; i <= n; i++) {
    ans = ans * i;
  }
  return ans;
};

// TC - O(n)
// SC - O(1)

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

// time complexity
// space complexity ->
/**
 * The space complexity of the recursive solution is O(n) due to the recursive call stack.
 *  In each recursive call, a new frame is added to the call stack,
 * storing the local variables and the current state of the function.
 * The maximum depth of the call stack is equal to the value of 'n' (the target sum).
 * Therefore, the space required on the call stack is proportional to the value of 'n'.
 */

// futher optimisation can be done using DP/memoisation
