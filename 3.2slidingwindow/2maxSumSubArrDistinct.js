/**
 * https://leetcode.com/problems/maximum-sum-of-distinct-subarrays-with-length-k/description/
 * 
 * @param {number[]} nums - The input array of numbers
 * @param {number} k - The size of the subarray we're looking for
 * @return {number} - The maximum sum of a subarray of size k with distinct elements
 */
const maximumSubarraySum = function (nums, k) {
    let windowStart = 0; // Start index of the current window
    let windowSum = 0; // Sum of elements in the current window
    let maxSum = 0; // Maximum sum found so far
    let uniqueElements = new Set(); // Set to keep track of unique elements in the window

    // Loop through the array
    for (let windowEnd = 0; windowEnd < nums.length; windowEnd++) {

        // Handle repeated numbers in a window
        // Examples: [1,2,2,3] [1,1,2,3] [1,2,1,3]

        // Note: The following commented code would miss cases like [1,2,1,3]
        // if (uniqueElements.has(nums[windowEnd])) {
        //     // Reset the window
        //     uniqueElements.clear();
        //     windowSum = 0;
        //     windowStart = windowEnd;
        // }

        // Remove elements from the start of the window until the current element is unique
        while (uniqueElements.has(nums[windowEnd])) {
            // We don't want this subarray, so we move to the next one
            // Starting from windowStart, delete it from the set and subtract from the sum
            uniqueElements.delete(nums[windowStart]);
            windowSum -= nums[windowStart];
            windowStart++;
        }

        // Add the current element to the window sum and set of unique elements
        windowSum += nums[windowEnd];
        uniqueElements.add(nums[windowEnd]);

        // Check if the window is valid (once we have k elements in the window)
        // Note: uniqueElements.size === k is a slower operation, so we use window size instead
        if (windowEnd - windowStart + 1 === k) {
            // Update the maxSum if the current window sum is larger
            maxSum = Math.max(maxSum, windowSum);

            // Prepare for the next window:
            // Remove the start element from the window sum
            windowSum -= nums[windowStart];

            // Remove the start element from the set of unique elements
            uniqueElements.delete(nums[windowStart]);

            // Move the start of the window
            windowStart++;
        }
    }

    // Return the maximum sum found
    return maxSum;
}

let nums1 = [3, 2, 3, 1];
const nums2 = [1, 2, 2, 3];
const nums3 = [1, 1, 2, 3];
const nums4 = [1, 2, 3, 4];
const   k = 3;

console.log( maxSubarraySumDistinct(nums, k));