// https://neetcode.io/problems/search-2d-matrix
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
const searchMatrix = (matrix, target) => {
    // Edge case: empty matrix or empty rows
    if (!matrix || matrix.length === 0 || matrix[0].length === 0) {
      return false;
    }
  
    // Step 1: Binary search to find the potential row
    let low = 0;
    let high = matrix.length - 1;
    let resultRow = undefined;
  
    while (low <= high) {
      const mid = low + Math.floor((high - low) / 2);
  
      if (
        matrix[mid][0] <= target &&
        target <= matrix[mid][matrix[mid].length - 1]
      ) {
        resultRow = mid;
        break;
      } else if (matrix[mid][0] > target) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    }
  
    // If no valid row is found, return false
    if (resultRow === undefined) {
      return false;
    }
  
    // Step 2: Binary search within the identified row
    low = 0;
    high = matrix[resultRow].length - 1;
  
    while (low <= high) {
      const mid = low + Math.floor((high - low) / 2);
      if (matrix[resultRow][mid] === target) {
        return true;
      } else if (matrix[resultRow][mid] > target) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    }
  
    return false;
};
  