// https://www.geeksforgeeks.org/count-of-subsets-with-sum-equal-to-x/

/**
 Intuition 
 1. the problem is similar to subSetSum problem itself.
 2. here we need to count number of subsets too, hence we need to initialize the dp table with 0
 */
function perfectSum(arr, target) {
    const n = arr.length;

    // Create a DP table to store the count of subsets
    const dp = new Array(n).fill(0).map(() => new Array(target + 1).fill(0));

    // Base case: There's 1 subset (empty) that makes the target 0
    for (let i = 0; i < n; i++) {
        dp[i][0] = 1;
    }
  
    if(arr[0] <= target) {
        dp[0][arr[0]] = 1;
    }

    // Fill the DP table
    for (let i = 1; i < n; i++) {
        for (let t = 1; t <= target; t++) {
            const exclude = dp[i - 1][t];
            const include = arr[i] <= t ? dp[i - 1][t - arr[i]] : 0; 
            dp[i][t] = exclude + include;
        }
    }

    return dp[n - 1][target];
}

const arr = [1, 2, 3, 3];
const target = 6;
console.log("Count of subsets with sum", target, ":", perfectSum(arr, target));


// above solution using memo
// A JavaScript program to count the number of subsets with
// a sum equal to a target using recursion and memoization
function countSubsets(index, target, arr, memo) {
    // Base cases
    if (target === 0) return 1; // The empty subset is always a valid solution for target 0
    if (index === 0) return arr[0] === target ? 1 : 0;

    // Check memoized result
    if (memo[index][target] !== -1) return memo[index][target];

    // Exclude the current element
    const exclude = countSubsets(index - 1, target, arr, memo);

    // Include the current element if it's within the target
    const include = arr[index] <= target ? countSubsets(index - 1, target - arr[index], arr, memo) : 0;

    // Store the result in the memo table and return
    memo[index][target] = exclude + include;
    return memo[index][target];
}

function perfectSum2(arr, target) {
    const n = arr.length;

    // Initialize a 2D memoization table with -1
    const memo = new Array(n).fill(null).map(() => new Array(target + 1).fill(-1));
    /**
     * Dont initialize with 0 above
     * 
     * -1: Represents an unsolved subproblem.
        0: Represents a valid result where no subset was found for a specific target sum.
     */

    // Start recursion
    return countSubsets(n - 1, target, arr, memo);
}

// Test Example
console.log(`Count of subsets with sum ${target}:`, perfectSum2([1, 2, 3, 3], 6));


// solve it using single 1D arr
// since we are only interested in last row of dp table, 
// where index denotes the target and value denotes the count
const countSubsetSumUsing1DMemo = (arr, target) => {
    // init a 1D array
    const dp = new Array(target + 1).fill(0);
  
    dp[0] = 1; // there will always be empty arr sum =1;
    if (arr[0] <= target) {
      dp[arr[0]] += 1; // mind the + sign
    }
  
    // fill the dp array
    for (let index = 1; index < arr.length; index++) {
      // reverse traverse the dp row to prevent overwriting
      for (let t = target; t > 0; t--) {
        dp[t] = dp[t] + dp[t - arr[index]];
      }
    }
    //
    return dp[target];
  };
  
  console.log(countSubsetSumUsing1DMemo([1, 2, 3, 3], 6)); // 3
  
