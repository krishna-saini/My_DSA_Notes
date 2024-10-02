/**
 * Your task is to count the number of ways to construct sum  n by throwing a dice
 * one or more times. Each throw produces an outcome between 1 and 6.
 * for example, for n=3, there are 4 ways
 * 1+1+1
 * 2+1
 * 1+2
 * 3
 *
 * https://cses.fi/problemset/task/1633
 */

/**
 * Brute Force Approach
 */
function countWaysToConstructSumFromDice(sum) {
  // base case
  // There's exactly one way to achieve a sum of 0, which is by doing nothing (i.e., no dice rolls).
  if (sum === 0) return 1;
  if (sum < 0) return 0;

  let ans = 0;
  for (let i = 1; i <= 6; i++) {
    ans += countWaysToConstructSumFromDice(sum - i);
  }
  return ans;
}
console.log(countWaysToConstructSumFromDice(3));

// TC: O(6^n)  // 6 choices for each dice where "n" is the value of the input sum
//SC: O(n)  // n is the depth of the recursion tree

// how TC is O(6^n)?
// 1. 6 choices for first dice
// 2. 6 choices for second dice
// 3. 6 choices for third dice
// ...
// ...
// n. 6 choices for nth dice
//
// hence total number of ways = 6^n

/**
 * The reason for the exponential time complexity is that the function explores a
 * branching tree of recursive calls, with each level of the tree representing a
 * dice throw and each branch representing a different outcome of the die.
 * The number of recursive calls grows exponentially with the value of sum,
 * making the time complexity exponential.
 */

// how to improve TC?
// DP

const countWaysToConstructSumFromDiceMemo = (n, memo = {}) => {
  if (n < 0) return 0;
  // base case: if n is zero, there will be only one throw
  if (n === 0) return 1; // O(1)
  if (memo[n]) {
    return memo[n];
  }
  let count = 0;
  for (let i = 1; i <= 6; i++) {
    count += countWaysToConstructSumFromDiceMemo(n - i, memo);
  }
  memo[n] = count;
  console.log(memo);
  return memo[n];
};
console.log(countWaysToConstructSumFromDiceMemo(6));

// TC
// computation of base case C(0) = O(1)
// C(1) = C(0)
// C(2) = C(1)+C(0) -> O(1)
// C(n) = sum(i=1 to i=6)C(n-i) where this will be either equal to computations we have
// done above or can be ignored if n-i < 0. 
// hence overall TC O(n)

/**
 * The number of unique subproblems is n + 1 (for each possible value from 0 to n).
 * For each subproblem, the function does a constant amount of work,
 *  looping over 6 dice outcomes.
 * T(n)=O(n)⋅O(6)=O(6n)=O(n)
 */

