# Recursion/BT with Memoization

---

# Tabulation 1

1. Recursion trees suffer from overflow. To save space complexity, we use a **bottom-up tabulation** approach.
2. Maintain a table `t[index][weight+1]`, where:
   - Rows represent array indices.
   - Columns are `W+1` to include all values from `0` to the target sum.
3. Initialize the base case:
   - `t[0][0] = true/1;` (target = 0).
4. Handle the first element:
   - `t[0][arr[0]] += true/1;` (for `index = 0` if the first element ≤ target).
5. Fill the rest of the DP table using nested loops.

```javascript
function findSubsetCountWithSumK(nums, target) {
    const n = nums.length;

    // Create a DP table where dp[i][t] represents the number of ways
    // to get a subset sum of `t` using the first `i` elements.
    const dp = new Array(n).fill(0).map(() => new Array(target + 1).fill(0));

    // Base case: There's 1 way to achieve sum 0 (by selecting no elements)
    dp[0][0] = 1;

    // Handle the first element explicitly if it's within the target range
    if (nums[0] <= target) {
        dp[0][nums[0]] += 1;
    }

    // Fill the DP table iteratively
    for (let i = 1; i < n; i++) {
        for (let t = 0; t <= target; t++) {
            // Exclude the current element: take the previous result for this target sum
            const exclude = dp[i - 1][t];

            // Include the current element if it doesn't exceed the target
            const include = nums[i] <= t ? dp[i - 1][t - nums[i]] : 0;

            // Total count is the sum of both cases
            dp[i][t] = exclude + include;
        }
    }

    // The final result is stored in dp[n - 1][target]
    return dp[n - 1][target];
}
```
# Tabulation 2
function findSubsetCountWithSumK(arr, target) {
    const n = arr.length;

    // Initialize the DP table where dp[i][t] represents the number of ways
    // to achieve sum t using the first i elements of the array.
    const dp = new Array(n + 1).fill(0).map(() => new Array(target + 1).fill(0));

    // Base case: there's one way to achieve sum 0 (by selecting no elements)
    dp[0][0] = 1;

    // Fill the DP table for all subsets of the array
    for (let i = 1; i <= n; i++) {
        for (let t = 0; t <= target; t++) {
            // Case 1: Exclude the current element (we take the result from the previous row)
            const exclude = dp[i - 1][t];

            // Case 2: Include the current element (if it's possible, i.e., if arr[i-1] <= t)
            const include = arr[i - 1] <= t ? dp[i - 1][t - arr[i - 1]] : 0; 

            // Total count for this (i, t) is the sum of both cases
            dp[i][t] = exclude + include;
        }
    }

    // The final answer is in dp[n][target], representing the number of subsets
    // that sum up to the target value using all n elements.
    return dp[n][target];
}

# Tabulation Using a 1D DP Table

```
const countSubsetSumUsing1DMemo = (arr, target) => {
    // Initialize a 1D DP array
    const dp = new Array(target + 1).fill(0);

    dp[0] = 1; // Base case: Empty subset always has a sum of 0

    // Handle the first element explicitly
    if (arr[0] <= target) {
        dp[arr[0]] += 1;
    }

    // Fill the DP array iteratively
    for (let index = 1; index < arr.length; index++) {
        // Reverse traverse to prevent overwriting values
        for (let t = target; t >= arr[index]; t--) {
            dp[t] = dp[t] + dp[t - arr[index]];
        }
    }

    return dp[target];
};


