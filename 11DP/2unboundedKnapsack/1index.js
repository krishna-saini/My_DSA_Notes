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
