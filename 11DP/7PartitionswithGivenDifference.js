/**
 * https://www.geeksforgeeks.org/problems/partitions-with-given-difference/1?itm_source=geeksforgeeks&itm_medium=article&itm_campaign=practice_card
 * 
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

class Solution {
    /**
     * @param {number[]} arr
     * @param {number} d
     * @returns {number}
     */
    countPartitions(arr, d) {
        const totalSum = arr.reduce((acc, curr) => acc + curr, 0);

        // Edge case: Check if the partition is possible
        if ((totalSum + d) % 2 !== 0 || d > totalSum) return 0;
        // S1 - S2 = d
        // s1 + S2 = totalSum;
        // S1 = 
        const target = (totalSum + d) / 2;

        return this.findSubsetCountWithSumK(arr, target);
    }

    findSubsetCountWithSumK(arr, target) {
        const n = arr.length;

        // Initialize dp table for memoization using 1D optimization
        const dp = new Array(target + 1).fill(0);
        dp[0] = 1; // Base case: There is 1 way to get a sum of 0

        if(arr[0] <= target){
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
}

// Example usage:
const solution = new Solution();
console.log(solution.countPartitions([0, 1, 2, 2, 2, 3, 0, 3, 0, 1], 12)); // Output: 2

