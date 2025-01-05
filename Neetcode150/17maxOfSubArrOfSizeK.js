/**
 * https://leetcode.com/problems/sliding-window-maximum/
 * 
 * @param {number[]} nums - The input array of integers.
 * @param {number} k - The size of the sliding window.
 * @return {number[]} - An array of the maximum values in each sliding window of size k.
 */
var maxSlidingWindow = function (nums, k) {
    let windowStart = 0; // The starting index of the sliding window.
    let maxValuesQueue = []; // Queue to store the maximum values in the current window.
    let slidingWindowMaxs = []; // Array to store the maximum values for each window.
  
    for (let windowEnd = 0; windowEnd < nums.length; windowEnd++) {
      // Insert current element into the queue while maintaining the descending order.
      if (maxValuesQueue.length === 0) {
        maxValuesQueue.push(nums[windowEnd]);
      } else {
        // Remove smaller elements from the end of the queue as they are not useful.
        while (maxValuesQueue[maxValuesQueue.length - 1] < nums[windowEnd]) {
          maxValuesQueue.pop();
        }
        maxValuesQueue.push(nums[windowEnd]);
      }
  
      // Check if the window has reached the desired size.
      if (windowEnd - windowStart + 1 === k) {
        // Push the maximum value of the current window into the result array.
        slidingWindowMaxs.push(maxValuesQueue[0]);
  
        // If the element at the start of the window is equal to the max, remove it from the queue.
        if (nums[windowStart] === maxValuesQueue[0]) {
          maxValuesQueue.shift();
        }
  
        // Slide the window by incrementing the starting index.
        windowStart++;
      }
    }
  
    return slidingWindowMaxs;
};
  