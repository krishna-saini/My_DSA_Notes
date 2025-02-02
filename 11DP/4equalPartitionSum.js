/**
 * https://leetcode.com/problems/partition-equal-subset-sum/
 * @param {number[]} nums
 * @return {boolean}
 */

// using recursion
var canPartition = function (nums) {
    // this problem is very much related to findArrSubsetSumK problem
    // https://leetcode.com/discuss/interview-question/1279773/google-interview-question-array-subset-sum-equals-k

    // if we partition the nums arr in two parts
    // their sum will be S1 & S2
    // if both are same, S1 = S2 = S
    // sum of two partition = 2S = sum of elements of arr
    // it means sum of el of arr must be even in order to even start this process'
    // if sum is false, it is certain that output is false 

    // now if sum(2S) is even, sum of one partition should be S
    // to return true, if we find any one partition with sum/target S,
    // it means there exist another partition too with same sum
    // else return false

    // so now this problem is deduced to findArrSubsetSumK
    // Calculate the total sum of the array
    const totalSum = nums.reduce((acc, current) => acc + current, 0);

    // If the total sum is odd, partitioning is impossible
    if (totalSum % 2 !== 0) return false;

    const target = totalSum / 2;
    const memo = new Array(nums.length).fill(null).map(() => new Array(target + 1).fill(undefined));

    const recursion = (index, target) => {
        if (target === 0) return true;  // Base case: subset found
        if (index < 0) return false;    // Base case: no elements left

        // dont use  !memo[index][target] as it checks if the value is falsy which can be 0, "" too
        if (memo[index][target] !== undefined) return memo[index][target];

        // Recursive case: exclude or include the current element
        const currentIndexNotTaken = recursion(index - 1, target);
        const currentIndexTaken = nums[index] > target ? false : recursion(index - 1, target - nums[index]);

        return memo[index][target] = currentIndexNotTaken || currentIndexTaken;
    };

    return recursion(nums.length - 1, target);
};

// using 2D table
/**
 * Partition Equal Subset Sum Problem
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function (nums) {
    const totalSum = nums.reduce((acc, current) => acc + current, 0);

    // If total sum is odd, partitioning is impossible
    if (totalSum % 2 !== 0) return false;

    const target = totalSum / 2;
    const memo = new Array(nums.length).fill(null).map(() => new Array(target + 1).fill(false));

    // Initialize the first column to true (target 0 is always achievable)
    for (let index = 0; index < nums.length; index++) {
        memo[index][0] = true;
    }

    // Initialize the first row
    if (nums[0] <= target) {
        memo[0][nums[0]] = true;
    }

    // Fill the DP table
    for (let index = 1; index < nums.length; index++) {
        for (let cols = 1; cols <= target; cols++) {
            const excludeCurrent = memo[index - 1][cols];
            const includeCurrent = nums[index] > cols ? false : memo[index - 1][cols - nums[index]];
            memo[index][cols] = excludeCurrent || includeCurrent;
        }
    }

    // Return result from last cell
    return memo[nums.length - 1][target];
};
// TC - O(n * target).
// SC - (n * target) for the cache 

// optimised TC using 1D array rolling array 
/**
 * Partition Equal Subset Sum
 * This function determines if the given array can be partitioned into two subsets with equal sum.
 * It uses dynamic programming to check if a subset with sum equal to half of the total sum is possible.
 *
 * @param {number[]} nums - Array of integers.
 * @return {boolean} - True if partition is possible, false otherwise.
 */
var canPartition = function (nums) {
    // Calculate the total sum of all elements in the array
    const totalSum = nums.reduce((acc, num) => acc + num, 0);

    // If the total sum is odd, partitioning into two equal subsets is impossible
    if (totalSum % 2 !== 0) return false;

    // Calculate the target sum for each subset
    const target = totalSum / 2;

    // Initialize the DP array with false values, and set dp[0] to true (because a sum of 0 is always possible)
    const dp = new Array(target + 1).fill(false);
    dp[0] = true;

    // Loop through each number in the array
    for (let num of nums) {
        // Traverse the DP array from right to left to prevent overwriting the current state
        for (let currentSum = target; currentSum >= num; currentSum--) {
            /**
             * For each possible sum (currentSum), we check if it's achievable either:
             * 1. Without using the current number (dp[currentSum])
             * 2. By including the current number (dp[currentSum - num])
             *
             * We update dp[currentSum] to true if either of these conditions is true.
             */
            dp[currentSum] = dp[currentSum] || dp[currentSum - num];
        }
    }

    // The final result is stored in dp[target], which tells us if a subset with the target sum exists
    return dp[target];
};

// Time complexity: O(n * target) where n is the number of elements and target is the sum we are trying to reach.
// Space complexity: O(target) due to the DP array used to store the possible sums.

