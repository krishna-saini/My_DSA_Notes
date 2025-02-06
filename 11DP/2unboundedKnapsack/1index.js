function unboundedKnapsack(W, n, val, wt) {
    // Base case: If there are no items or capacity is 0
    if (n === 0 || W === 0) {
        return 0;
    }

    // If the weight of the current item is less than or equal to the capacity
    if (wt[n - 1] <= W) {
        // Include the current item (unlimited times)
        // hence not decreasing the index.
        const include = val[n - 1] + unboundedKnapsack(W - wt[n - 1], n, val, wt);
        // Exclude the current item
        const exclude = unboundedKnapsack(W, n - 1, val, wt);
        // Return the maximum of the two choices
        return Math.max(include, exclude);
    } else {
        // If weight is more than capacity, exclude the current item
        return unboundedKnapsack(W, n - 1, val, wt);
    }
}

// Example usage
const W = 8;
const n = 3;
const val = [15, 10, 5];
const wt = [1, 3, 4];

console.log("Maximum value:", unboundedKnapsack(W, n, val, wt));

// further TC optimisation using 
// 1. memo
// 2. Tabulations
// 3. SC optimisation using 1D DP array

// memo
function unboundedKnapsack(W, n, val, wt) {
    const memo = new Array(n).fill(0).map(() => new Array(W + 1).fill(-1));

    function knapsackRecursive(W, n) {
        // Base case: If there are no items or capacity is 0
        if (n === 0 || W === 0) return 0;

        // Return memoized result if available
        if (memo[n][W] !== -1) return memo[n][W];

        if (wt[n - 1] <= W) {
            // Include the current item (unlimited times) or exclude it
            const include = val[n - 1] + knapsackRecursive(W - wt[n - 1], n);
            const exclude = knapsackRecursive(W, n - 1);
            memo[n][W] = Math.max(include, exclude);
        } else {
            // Exclude the current item
            memo[n][W] = knapsackRecursive(W, n - 1);
        }

        return memo[n-1][W];
    }

    return knapsackRecursive(W, n);
}

console.log("Maximum value:", unboundedKnapsack([1, 3, 4], 3, [15, 10, 5], 8));

// Time Complexity: O(n×W)
//Space Complexity: O(n*W) + recursive stack


function unboundedKnapsack(W, n, val, wt) {
    // Create a 1D DP array where dp[j] represents the max value
    // for capacity j
    const dp = new Array(W + 1).fill(0);

    // Build the dp array
    for (let i = 0; i < n; i++) {
        for (let j = wt[i]; j <= W; j++) {
            dp[j] = Math.max(dp[j], val[i] + dp[j - wt[i]]);
        }
    }

    return dp[W];
}

// Time Complexity: O(n×W)
//Space Complexity: O(W)

