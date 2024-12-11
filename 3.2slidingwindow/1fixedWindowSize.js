var maximumSubarraySum = function (nums, k) {
    // Edge case: if the array length is less than k, we can't form a valid subarray
    if (nums.length < k) {
      throw new Error("nums.length < k");
    }
  
    // Initialize the sum of the first k elements
    // This forms our initial window
    let maxSum = 0;
    for (let i = 0; i < k; i++) {
      maxSum += nums[i];
    }
  
    // Current maxSum is the sum of the first window
  
    // Sliding window technique
    // We'll slide the window one element at a time
    for (let i = 1; i + k - 1 < nums.length; i++) {
      // i represents the start of the new window
      // i + k - 1 represents the end of the new window
  
      // Calculate the sum of the new window:
      // 1. Remove the first element of the previous window (nums[i-1])
      // 2. Add the last element of the new window (nums[i-1+k])
      const newSum = maxSum - nums[i - 1] + nums[i + k - 1];
  
      // Update maxSum if the new sum is greater
      maxSum = Math.max(maxSum, newSum);
  
      // The window has now slid one position to the right
    }

    // After sliding through all possible windows, return the maximum sum found
    return maxSum;
};

let nums = [1, 5, 4, 2, 9, 9, 9],
k = 3;

console.log("Maximum subarray sum:", maximumSubarraySum(nums, k));

// Time Complexity: O(n)
// - We iterate through the array once to initialize the first window: O(k)
// - Then we slide the window through the rest of the array: O(n-k)
// Total: O(k) + O(n-k) = O(n)

// Space Complexity: O(1)
// - We only use a constant amount of extra space (maxSum and newSum)