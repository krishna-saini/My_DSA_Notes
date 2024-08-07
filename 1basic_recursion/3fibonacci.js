/**
 * what is fibonacci series?
 * 0, 1, 1, 2, 3, 5, 8, 13, 21, 34
 * F(0) = 0, F(1) = 1  Base condition
 * F(n) = F(n - 1) + F(n - 2), for n > 1. Recursive condition
 */

const fibonacci = (n) => {
  if (n < 2) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
};
console.log(fibonacci(3));

// Time complexity = work done per node * number of nodes = O(1) * 2^n = O(2^n)

// TC: O(2^n) - exponential time complexity
//  draw the recursion tree and see how many nodes are there
// each node is calling two more nodes
//  the height of the tree is n
//  so, total nodes are 2^n
// how? 2^0 + 2^1 + 2^2 + 2^3 + ... + 2^n = 2^n
// how it is time complexity? because each node is doing some work
// and the work is constant time
// so, total time complexity is 2^n * 1 = 2^n
// SC: O(n) - recursive stack space

// optimize the above solution
// memoization

function fibonacciMemo(n, memo = {}) {
  if (n <= 0) {
    return 'Invalid input';
  } else if (n === 1) {
    return 0;
  } else if (n === 2) {
    return 1;
  } else if (memo[n]) {
    return memo[n];
  } else {
    memo[n] = fibonacciMemo(n - 1, memo) + fibonacciMemo(n - 2, memo);
    return memo[n];
  }
}

// TC: O(n)
// how ? draw the recursion tree and see how many nodes are there
// each node is calling two more nodes
//  the height of the tree is n
//  so, total nodes are n
// how total nodes are n only  ?
// because we are memoizing the result of each node
// so, we are not calling the same node again
// so, total nodes are n
// how it is time complexity? because each node is doing some work
// and the work is constant time
// so, total time complexity is n * 1 = n
// SC: O(n) - recursive stack space

/**
 * the above approach of solving is DP with memo(top-down)
 * but it is still using recursion which can cause max call stack exceeded errror
 * for very large numbers, try for 1000th
 *
 * Solution is to use DP with tabulation(bottom-up)
 */

const fibonacciTabular = (n) => {
  if (n < 0) return 0;
  if (n <= 2) return n;
  // we already know output for first 3 numbers₹
  const output = [0, 1, 1];
  for (let i = 3; i <= n; i++) {
    output[i] = output[i - 1] + output[i - 2];
  }
  return output[n];
};

// TC - O(n)
// SC - O(n)
// no call stack exceeded problem
