/**
 * https://leetcode.com/problems/target-sum/
 * 
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function (arr, target) {

    // question to clarify
    // 1. what is the sum of empty array
    // 2. what if no such combinations can be formed
    const totalSum = arr.reduce((acc, curr) => acc + curr);

    /**
    Input: nums = [1,1,1,1,1], target = 3
Output: 5
Explanation: There are 5 ways to assign symbols to make the sum of nums be target 3.
-1 + 1 + 1 + 1 + 1 = 3
+1 - 1 + 1 + 1 + 1 = 3
+1 + 1 - 1 + 1 + 1 = 3
+1 + 1 + 1 - 1 + 1 = 3
+1 + 1 + 1 + 1 - 1 = 3

from above example , we can see that 
- we have to divide the array in two half have sum S1 and S2;
- S1 + S2 = S
S1 - S2 = target if S1>S2, S1 = (S+target)/2

so the problem boils down to count the subset arry whose sum = (S+target)/2


     */


    // Edge case: Check if the partition is possible
    // partition is not possible if |target| > totalSum
    if ((totalSum + target) % 2 !== 0 || Math.abs(target) > totalSum) return 0;

    const sumToFind = (totalSum + target) / 2;

    return findSubsetCountWithSumK(arr, sumToFind);

    function findSubsetCountWithSumK(arr, target) {
        const n = arr.length;

        // Initialize dp table for memoization using 1D optimization
        const dp = new Array(target + 1).fill(0);
        dp[0] = 1; // Base case: There is 1 way to get a sum of 0 for empty subsets or combinations of zeros.

        if (arr[0] <= target) {
            dp[arr[0]] += 1;
        }
        // Fill the DP table
        for (let i = 1; i < n; i++) {
            // Traverse backwards to avoid overwriting previous results
            for (let j = target; j >= arr[i]; j--) {
                dp[j] += dp[j - arr[i]];
            }
        }

        return dp[target];
    }
};