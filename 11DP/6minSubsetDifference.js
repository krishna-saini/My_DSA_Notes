// https://www.geeksforgeeks.org/partition-a-set-into-two-subsets-such-that-the-difference-of-subset-sums-is-minimum/
// https://www.geeksforgeeks.org/problems/minimum-sum-partition3317/1?itm_source=geeksforgeeks&itm_medium=article&itm_campaign=practice_card

/**
 * Given an array arr[]  containing non-negative integers, the task is to divide it into two sets set1 and set2 such that 
 * the absolute difference between their sums is minimum and find the minimum difference.
 * 
Input: arr[] = [1, 6, 11, 5]
Output: 1

Input: arr[] = [1, 4]
Output: 3

Input: arr[] = [1]
Output: 1
 */

/**
 * Intuition
 the given arr will be divided in 2 sets. 
 Set 1 has sum = S1 and set 2 has sum = S2.
 find min(|S1 - S2|)

 1. we cant find two sets and their sum S1 and S2. but we can find the range of sum. S1, S2 belongs to (0, sum of array);
 2. in the straight line 0 to sumOfArray, we need to find what all values S1 and S2 can take
eg arr = [1, 2, 4 ] 
       0 ------ 1 ---- 2 ----- 3 ---- 4 ------ 6 ---- 7
4. if we draw a imgainary line in middle(sumOfarr/2), S1 will lie on one side and S2 on another. lets say S2 is on left side.
5. if we find S2, we can easily find S1 as S1 = sum of array - S2.
     so our problem boils down to find min(Range - 2S2)
 */


// using recursion
class Solution {
    // Function to find minimum difference between any pair of elements in an array.
    minDifference(arr) {
        // find sum of the array
      let totalSum = 0;
      for (let i = 0; i < arr.length; i++) {
        totalSum += arr[i];
      }
      // considering S1 lies on left half of straight line (0, totalSum)
      const halfSum = Math.floor(totalSum / 2);
  
      let n = arr.length;
      this.memo = new Array(n)
        .fill(null)
        .map(() => new Array(halfSum + 1).fill(undefined));
  
      // Find all possible subset sums using memoization
      // we need to loop through (0 to halfSum) as memo does not update the whole 2D array with single target
      for (let target = 0; target <= halfSum; target++) {
        this.subsetSumToKUsingMemoisation(n - 1, target, arr);
      }
  
      // Find the largest possible subset sum <= halfSum
      // as the last row of memo tell us that for this array which all are possible subset sums
      // the right most cell which is true has the highest target value;
      let closestSum = 0;
      for (let i = halfSum; i >= 0; i--) {
        if (this.memo[arr.length - 1][i]) {
          closestSum = i;
          break; // Optimization: Stop once we find the largest sum
        }
      }
  
      return totalSum - 2 * closestSum;
    }
  
    // Memoization function to determine if subset sum equals target
    subsetSumToKUsingMemoisation(index, target, arr) {
      // Base case: target achieved
      if (target === 0) return true;
  
      // Base case: no elements left
      if (index < 0) return false;
  
      // Check memoization table
      if (this.memo[index][target] !== undefined) {
        return this.memo[index][target];
      }
  
      // Exclude the current element
      const exclude = this.subsetSumToKUsingMemoisation(index - 1, target, arr);
  
      // Include the current element if it's not greater than target
      const include =
        arr[index] <= target
          ? this.subsetSumToKUsingMemoisation(index - 1, target - arr[index], arr)
          : false;
  
      // Store result in memoization table
      this.memo[index][target] = exclude || include;
  
      // this return is required as we are dealing with recursions. function need to go out of EC
      return this.memo[index][target]; // Corrected: Return the result
    }
}


/**
 * Optimisation
 * 1. we dont need the loop for (0, halfSum). use tabular apporach to prevent that
 * 2. save space complexity of recusvie tree
 */
class Solution {
    // Function to find minimum difference between any pair of elements in an array.
    minDifference(arr) {
        let totalSum = 0;
        for (let i = 0; i < arr.length; i++) {
            totalSum += arr[i];
        }
        const halfSum = Math.floor(totalSum / 2);

        let n = arr.length;
        this.memo = new Array(n).fill(null).map(() => new Array(halfSum + 1).fill(false));

        // Find all possible subset sums using memoization
        // this operation is required once only as table will fill it for all possible targets
        this.subsetSumToKUsingTabular(arr, halfSum);
        

        // Find the largest possible subset sum <= halfSum

        let closestSum = 0;
        for (let i = halfSum; i >= 0; i--) {
            if (this.memo[arr.length - 1][i]) {
                closestSum = i;
                break; // Optimization: Stop once we find the largest sum
            }
        }

        return totalSum - 2 * closestSum;
    }
    // Tabular approach
    subsetSumToKUsingTabular(arr, k){
            this.memo[0][0] = true;
        
        if(arr[0] <= k){
            this.memo[0][arr[0]] = true;
        }
        
        for (let index = 1; index < arr.length; index++) {
        for (let target = 0; target <= k; target++) {
            // Path 1: Exclude the current element (take the value from the previous row)
            const excludeCurrent = this.memo[index - 1][target];

            // Path 2: Include the current element (only if it's not greater than the target)
            const includeCurrent = arr[index] <= target ? this.memo[index - 1][target - arr[index]] : false;

            // The final value for dp[i][target] is true if either of the two paths is true
            this.memo[index][target] = excludeCurrent || includeCurrent;
        }
    }


    // The result will be in dp[n-1][k], where we check if we can form the target sum using all n elements
    // return dp[arr.length - 1][k];
    }

   
}

// Further SC optimisation
/**
 * Since we are only interested in last row of the DP table
 * Hence we dont need 2D array
 * We can have 1D runnning array
 */
class Solution {
    // Function to find minimum difference between any pair of elements in an array.
    minDifference(arr) {
      let totalSum = 0;
      for (let i = 0; i < arr.length; i++) {
        totalSum += arr[i];
      }
      const halfSum = Math.floor(totalSum / 2);
  
      let n = arr.length;
      this.memo = new Array(halfSum + 1).fill(false);
  
      // Find all possible subset sums using memoization
  
      this.subsetSumToKUsingTabular(halfSum, arr);
  
      // Find the largest possible subset sum <= halfSum
      let closestSum = 0;
      for (let target = halfSum; target >= 0; target--) {
        if (this.memo[target]) {
          closestSum = target;
          break; // Optimization: Stop once we find the largest sum
        }
      }
  
      return totalSum - 2 * closestSum;
    }
    // using 1D array for DP
    subsetSumToKUsingTabular(k, arr) {
      this.memo[0] = true; // 0 sum is always there
      // If the first element is less than or equal to the target, set dp[arr[0]] to true
      if (arr[0] <= k) {
        this.memo[arr[0]] = true;
      }
  
      for (let index = 1; index < arr.length; index++) {
        // travese the target in reversse order to prevent overwriting
        for (let target = k; target >= arr[index]; target--) {
          // exclude || include
          this.memo[target] = this.memo[target] || this.memo[target - arr[index]];
        }
      }
  
      // The result will be in dp[n-1][k], where we check if we can form the target sum using all n elements
      // return dp[arr.length - 1][k];
    }
}
  
  
// the above problem can also be solved by finding table for the whole sum line and then divide it at the end
// this makes this problem to find subsetSum table for the array sum + some lines to find max from the half of last row of table