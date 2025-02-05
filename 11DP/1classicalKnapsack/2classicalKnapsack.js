function knapsack(wt, val, W, n) {
    // Base cases: no items or no capacity
    if (n === 0 || W === 0) {
        return 0;
    }

    // If the weight of the current item is less than or equal to the capacity
    if (wt[n - 1] <= W) {
        return Math.max(
            // Include current item
            val[n - 1] + knapsack(wt, val, W - wt[n - 1], n - 1),
            // Exclude current item
            knapsack(wt, val, W, n - 1)
        );
    } else {
        // If weight exceeds the capacity, exclude the current item
        return knapsack(wt, val, W, n - 1);
    }
}

// Example usage
const wt = [1, 3, 4, 5];
const val = [1, 4, 5, 7];
const W = 7;
const n = wt.length;

console.log("Maximum value:", knapsack(wt, val, W, n));



// further TC optimisation using 
// 1. memo
// 2. Tabulations
// 3. SC optimisation using 1D DP array