//https://www.geeksforgeeks.org/problems/rod-cutting0840/1?itm_source=geeksforgeeks&itm_medium=article&itm_campaign=practice_card
class Solution {
    // Function to find the maximum possible value of the function.
    cutRod(prices) {
        const n = prices.length;

        // Edge case
        if (n === 0) {
            return 0;
        }
        if (n === 1) {
            return prices[0];
        }

        // Memoization array
        // memo[index][length] will store the maximum profit for a rod of length `length`
        // considering up to the `index`-th price.
        const memo = new Array(n).fill(null).map(() => new Array(n + 1).fill(-1));

        const cutRodRecur = (index, length) => {
            // Base cases
            // If we have only one type of piece (index === 0), we can cut the rod into pieces of length 1
            // and the profit will be length * prices[0].
            if (index === 0) return length * prices[0];
            // If the length of the rod is 0, the profit is 0.
            if (length === 0) return 0;

            // Check if the result for the current `index` and `length` is already computed.
            if (memo[index][length] !== -1) {
                return memo[index][length];
            }

            // Exclude the current piece: do not take the current piece.
            let notTake = cutRodRecur(index - 1, length);

            // Include the current piece if possible.
            let take = -Infinity;
            // Check if including the current piece is possible.
            // `index + 1` because we are considering the piece at the current index,
            // and we need to ensure that the piece fits within the remaining length. since it is 1 based indexing
            if (index + 1 <= length) {
                // Take the current piece and recurse with the remaining length (length - index - 1)
                // and the same index (we can reuse the current piece).
                take = prices[index] + cutRodRecur(index, length - index - 1);
            }

            // Store the maximum of `notTake` and `take` in the memoization array.
            memo[index][length] = Math.max(notTake, take);
            // Return the stored value.
            return memo[index][length];
        };

        // Start the recursion with the last index and the full length of the rod.
        return cutRodRecur(n - 1, n);
    }
}

// TC - O(n^2)
// SC - O(n^2)


// using tabulation
class Solution {
    // Function to find the maximum possible value of the function.
    cutRod(prices) {
        const n = prices.length;
        
        // Edge case
        if (n === 0) {
            return 0;
        }
        if (n === 1) {
            return prices[0];
        }

        // DP array where dp[i] will store the maximum profit for a rod of length i
        const dp = new Array(n + 1).fill(0);

        for (let i = 1; i <= n; i++) {
            // reverse looping
            for (let j = 1; j <= i; j++) {
                dp[i] = Math.max(dp[i], prices[j - 1] + dp[i - j]);
            }
        }

        return dp[n];
    }
}
