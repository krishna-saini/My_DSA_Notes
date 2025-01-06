/**
 * 
 * https://leetcode.com/problems/longest-substring-without-repeating-characters/description/
 * 
 * 
 * Function to find the maximum area of water that can be contained
 * between two vertical lines on a 2D plane.
 * @param {number[]} heights - Array of vertical line heights
 * @return {number} - Maximum area of water that can be contained
 */
const findMaxWaterContainer = function (heights) {
    // Edge case: If the array is empty or has fewer than two lines, return 0
    if (heights.length < 2) return 0;
  
    /**
     * Brute Force Approach
     * Time Complexity: O(n^2)
     * Space Complexity: O(1)
     */
    const bruteForceMaxArea = (heights) => {
      let maxArea = 0; // Track the maximum area encountered
  
      // Iterate through all pairs of vertical lines
      for (let i = 0; i < heights.length - 1; i++) {
        for (let j = i + 1; j < heights.length; j++) {
          // Calculate the height of the container as the smaller of the two lines
          const containerHeight = Math.min(heights[i], heights[j]);
  
          // Calculate the width of the container as the distance between the two lines
          const containerWidth = j - i;
  
          // Calculate the area and update the maximum area encountered
          const currentArea = containerHeight * containerWidth;
          maxArea = Math.max(maxArea, currentArea);
        }
      }
  
      return maxArea;
    };
  
    /**
     * Optimized Approach (Two Pointers)
     * Time Complexity: O(n)
     * Space Complexity: O(1)
     */
    const optimizedMaxArea = (heights) => {
      let maxArea = 0; // Track the maximum area encountered
  
      let leftPointer = 0;               // Pointer at the beginning of the array
      let rightPointer = heights.length - 1; // Pointer at the end of the array
  
      // Move the two pointers toward each other
      while (leftPointer < rightPointer) {
        // Calculate the height of the container as the smaller of the two lines
        const containerHeight = Math.min(heights[leftPointer], heights[rightPointer]);
  
        // Calculate the width of the container as the distance between the two pointers
        const containerWidth = rightPointer - leftPointer;
  
        // Calculate the area and update the maximum area encountered
        const currentArea = containerHeight * containerWidth;
        maxArea = Math.max(maxArea, currentArea);
  
        // Move the pointer pointing to the shorter line, aiming to find a taller line
        if (heights[leftPointer] < heights[rightPointer]) {
          leftPointer++;
        } else {
          rightPointer--;
        }
      }
  
      return maxArea;
    };
  
    // Uncomment the approach you want to use:
    // return bruteForceMaxArea(heights); // Brute force approach
    return optimizedMaxArea(heights); // Optimized approach
  };
  
  // Example Usage
  const heights = [1, 8, 6, 2, 5, 4, 8, 3, 7];
  console.log("Maximum Water Container Area (Optimized):", findMaxWaterContainer(heights)); // Output: 49
  