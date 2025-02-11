/**
https://leetcode.com/discuss/interview-question/1279773/google-interview-question-array-subset-sum-equals-k
https://www.naukri.com/code360/problems/subset-sum-equal-to-k_1550954
his problem was asked by Google.

Given a list of integers S and a target number k, write a function that returns a subset of S that adds up to k. 
If such a subset cannot be made, then return null.

Integers can appear more than once in the list. You may assume all numbers in the list are positive.

For example, given S = [12, 1, 61, 5, 9, 2] and k = 24, return [12, 9, 2, 1] since it sums up to 24.
*/
/**
 * Intution
 * Here we have set of items and we have choice to whether choose that item or not. 
 * Hence this makes it a recursion problem.
 * Since overlapping will be there, it can be optimised using DP
 */

/**
 * First lets return true is such subset exits else false. 
 * https://leetcode.com/discuss/interview-question/1279773/google-interview-question-array-subset-sum-equals-k
 */
// Recurstion approach
class Solution {
    isSubsetSum(arr, target) {
        if(arr.includes(target)){
            return true;
        }
        
        if (arr.length === 0) return target === 0;

        return this.find(arr.length - 1, target, arr); // we can start from oth index and 0 target sum too and can increment in each step
        // or i can start from (0, target), (n-1, target), (0,0), (n-1, 0)
    }

    find(index, target, arr) {
        // Base case: target achieved
        if (target === 0) return true;

        // Base case: no elements left
        if (index < 0) return false;

        // Exclude the current element
        const exclude = this.find(index - 1, target, arr);

        // Include the current element if it's not greater than target
        const include = arr[index] <= target 
            ? this.find(index - 1, target - arr[index], arr)
            : false;

        return exclude || include;
    }
}

/**
as for each element, you branch into two recursive calls for each node. so there are total n nodes
Time Complexity: the recursive tree has 2^n branches, where n is the number of elements in the array. TC O(2^n)

The above solution will give TLE for larger inputs

SC -  O(n) =  recursive tree 
 */

// optimis TC using memo
class Solution {
    isSubsetSum(arr, target) {
                // this.dp = Array.from({ length: n }, () => Array(target + 1).fill(undefined));

        this.memo = new Array(arr.length).fill(null).map(() => new Array(target + 1).fill(undefined));
        return this.find(arr.length - 1, target, arr);
        
    }

    find(index, target, arr ) {
        // Base case: target achieved
        if (target === 0) return true;

        // Base case: no elements left
        if (index < 0) return false;
        //  if (index === 0) return nums[0]===target;
        
        // Check memoization table
        if (this.memo[index][target] !== undefined) {
            return this.memo[index][target];
        }

        // Exclude the current element
        const exclude = this.find(index - 1, target, arr);

        // Include the current element if it's not greater than target
        const include = arr[index] <= target 
            ? this.find(index - 1, target - arr[index], arr)
            : false;

         // Store result in memoization table
        this.memo[index][target] = exclude || include;

        return this.memo[index][target];
    }
}
/**
For each pair of index and target, we compute the result only once and store it. 
If we encounter the same i and target again, we simply return the stored result.

TC - O(n * target).
SC - (n * target) for the cache + O(n) for the recursion stack

// the recursion stack may cause overflow
solution = bottom up tabulation DP
 */

// Function to check if a subset of an array can sum up to a target value
export function subsetSumToKUsingTabulation(n, k, arr) {
    // Create a 2D DP table where dp[i][j] will be true if a subset with sum j is possible using first i elements
    const dp = new Array(n).fill(null).map(() => new Array(k + 1).fill(false));

    // Base case: If the target sum is 0, an empty subset is always a valid solution
    // So, fill the first column (target sum 0) with true
    // for (let index = 0; index < n; index++) {
    //     dp[index][0] = true;
    // }
    dp[0][0] = true; // doing it for 0th index only as other index are anyway overwritten while filling DP table

    // Base case: For the first element, if the element is equal to the target, it's a valid solution
    // this is required if you are doing n rows.
    if (arr[0] <= k) {
        dp[0][arr[0]] = true;  
    }

    // Fill the DP table
    // dp[i][j] will be true if we can make sum j using the first i elements of the array
    for (let index = 1; index < n; index++) {
        for (let target = 0; target <= k; target++) { // can start from 1st column also here as the values are T/F only
            // Path 1: Exclude the current element (take the value from the previous row)
            const excludeCurrent = dp[index - 1][target];

            // Path 2: Include the current element (only if it's not greater than the target)
            const includeCurrent = arr[index] <= target ? dp[index - 1][target - arr[index]] : false;

            // The final value for dp[i][target] is true if either of the two paths is true
            dp[index][target] = excludeCurrent || includeCurrent;
        }
    }

    // The result will be in dp[n-1][k], where we check if we can form the target sum using all n elements
    return dp[n - 1][k];
}

// Example usage:
// This will return true since [3, 4, 2] can sum up to 9
console.log(subsetSumToKUsingTabulation(6, 9, [3, 34, 4, 12, 5, 2])); // true

// TC - O(n * target).
// SC - (n * target) for the cache 

// optimise SC using 1D array
// earlier we were using dp[i][target] = dp[i - 1][target] ||  dp[i - 1][target - arr[i]]
// as we only need to keep the state of the current row (dp[]) and update it iteratively using values from the previous iteration.
// this can be done using dp[target] = dp[target] || dp[target - arr[i]]
// return dp[n - 1][k] -> return dp[k]
// To avoid overwriting values in the same iteration, you should iterate backwards while updating the dp[] array.
export function subsetSumToKUsing1DArr(n, k, arr) {
    // Create a 1D DP array, where dp[j] will be true if a subset with sum j is possible
    const dp = new Array(k + 1).fill(false);

    // Base case: If the target sum is 0, an empty subset is always a valid solution
    dp[0] = true;  // sum of 0 is always possible (empty subset)

    // If the first element is less than or equal to the target, set dp[arr[0]] to true
    if (arr[0] <= k) {
        dp[arr[0]] = true;
    }

    // Fill the DP array for subsequent elements
    for (let i = 1; i < n; i++) {
        // Iterate backwards to avoid overwriting values from the same round
        for (let target = k; target >= arr[i]; target--) {
            dp[target] = dp[target] || dp[target - arr[i]];
        }
    }

    // The result is in dp[k], where we check if we can form the target sum
    return dp[k];
}

// TC - O(n*target)
// SC - O(target)